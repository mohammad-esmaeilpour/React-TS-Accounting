import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import DynamicService from "src/service/DynamicService";
import ChevronDown from "../icons/ChevronDown";
import getApi from "src/react-query/services/getApi";
import { TSingleCategory } from "src/types/Category.types";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  categoryType: "goods" | "services" | string;
  selectedCategory: TSingleCategory | null;
  setSelectedCategory: Function;
};

type CategoryItemProps = {
  category: TSingleCategory;
  onSelect: (category: TSingleCategory) => void;
};

type TTopLeveCategories = {
  goods: TSingleCategory[];
  services: TSingleCategory[];
};

const CategoryDropdown = ({
  categoryType,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const params = useParams();

  
  const mainData: DataProps = useAppSelector((state) => state.dataReducer);

  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const { data, isLoading, error } = getApi<TTopLeveCategories>({
    queryKey: ["topLevelCategory"],
    service: `category/toplevel/${params.bid}`,
    serviceKey: "categories",
  });

  const handleCategorySelect = (category: TSingleCategory) => {
    setSelectedCategory(category); // Set the selected category
  };

  // Fetch children categories dynamically
  const getChildren = async (id: number) => {
    try {
      const response: any = await DynamicService({
        method: "get",
        service: `category/${categoryType}/children/${params.bid}/${id}`,
      });
      if (response.status === 200) {
        return response.data.children;
      }
    } catch (error) {
      console.error("Error fetching children:", error);
      return [];
    }
  };
const CategoryItem = ({ category, onSelect }: CategoryItemProps) => {
  const [children, setChildren] = useState<TSingleCategory[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetchedChildren, setHasFetchedChildren] = useState(false); // New state to track if children are fetched


  const handleExpandClick = async () => {
    if (!isExpanded && !hasFetchedChildren) {
      // Fetch children only if they haven't been fetched before
      setIsLoading(true);
      const fetchedChildren = await getChildren(category?.id);
      setChildren(fetchedChildren);
      setHasFetchedChildren(true); // Mark that we've fetched children for this category
      setIsLoading(false);
    }
    setIsExpanded(!isExpanded);
  };

  const handleCategoryClick = () => {
    onSelect(category); // Call onSelect to update the selected category
    detailsRef.current && detailsRef.current.removeAttribute("open");
  };

  return (
    <Fragment key={category.id}>
      <div
        className={`cursor-pointer rounded-lg ps-2 flex justify-between items-center w-full hover:bc-secondary ${
          isExpanded ? "bg-gray-200" : "bg-white"
        }`}
      >
        <div
          onClick={handleCategoryClick}
          className="text-[13px] flex-1 py-3 family-regular hover:text-black transition-all "
        >
          {category.title}
        </div>
        <div
          onClick={handleExpandClick}
          className={`flex justify-end items-center p-2.5 rounded-lg transition-all hover:bg-gray-300 ${
            isExpanded ? "bg-gray-400" : "bg-base-300"
          }`}
        >
          <div
            className={`transition-all ${
              isExpanded ? "rotate-0" : "rotate-90"
            }`}
          >
            <ChevronDown size={12} />
          </div>
        </div>
      </div>

      {/* Render Children if expanded */}
      {isExpanded && (
        <div className="ml-4 mb-7 pb-2 rounded-lg">
          {isLoading ? (
            <div className="loading loading-dots"></div>
          ) : children?.length === 0 || !children ? (
            <div className="text-sm block mt-5 w-full family-regular text-center">
              {mainData.category.dropown.notFound}
            </div>
          ) : (
            children?.map((child) => (
              <CategoryItem
                onSelect={onSelect}
                key={child?.id}
                category={child}
              />
            ))
          )}
        </div>
      )}
    </Fragment>
  );
};


  if (error)
    return (
      <div className="w-full flex items-center justify-start h-full">
        {error.message}
      </div>
    );

  return (
    <div>
      <div className="text-xs family-regular mb-2 block">
        {mainData.category.dropown.label}
      </div>
      {isLoading ? (
        <div className="input-instance skeleton rounded-xl" />
      ) : (
        <details className="dropdown w-full" ref={detailsRef}>
          <summary className="input-instance cursor-pointer flex justify-between text-xs items-center rounded-xl family-regular text-opacity-60">
            {selectedCategory
              ? selectedCategory?.title
              : mainData.category.dropown.label}
            <ChevronDown size={10} />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-full p-2 shadow max-h-[300px] overflow-auto">
            <div className="w-full block">
              {categoryType === "services" &&
                data?.services?.map((item: TSingleCategory) => (
                  <div key={item?.id}>
                    <CategoryItem
                      onSelect={handleCategorySelect}
                      key={item?.id}
                      category={item}
                    />
                  </div>
                ))}
              {categoryType === "goods" &&
                data?.goods?.map((item: TSingleCategory) => (
                  <div key={item?.id}>
                    <CategoryItem
                      onSelect={handleCategorySelect}
                      key={item?.id}
                      category={item}
                    />
                  </div>
                ))}
            </div>
          </ul>
        </details>
      )}
    </div>
  );
};

export default CategoryDropdown;
