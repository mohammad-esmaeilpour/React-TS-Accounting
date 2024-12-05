import { createRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import EditIcon from "src/components/icons/EditIcon";
import PlusIcon from "src/components/icons/PlusIcon";
import NotFoundItem from "src/components/NotFoundItem";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TSingleCategory } from "src/types/Category.types";
import CategoryProvider from "./CategoryProvider";
import Modal from "src/components/Modal";
import CreateCategory from "./CreateCategory";
import UpdateCategory from "./UpdateCategory";

// type TTopLevelCategories = {
//   goods: TSingleCategory[];
//   services: TSingleCategory[];
// };

const TopLevelCategories = () => {
  // state
  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);

  // hooks
  const params :any = useParams();
  const location = useLocation();
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const createModalsRef = createRef<HTMLDialogElement | null>();
  const updateModalsRef = createRef<HTMLDialogElement | null>();

  const handleCreateModal = (category: TSingleCategory | null) => {
    setSelectedCategory(category);
    createModalsRef.current && createModalsRef.current.showModal();
  };

  const handleUpdateModal = (category: TSingleCategory) => {
    setSelectedCategory(category);
    updateModalsRef.current && updateModalsRef.current.showModal();
  };

  const getId = location.pathname.split("/");

  const {
    data: topLevelsCategories,
    refetch,
    isLoading,
    fetchStatus,
  } = getApi<any>({
    queryKey: ["topLevelCategories", getId[getId.length - 1]],
    service: `category/toplevel/${params.bid}`,
    serviceKey: "categories",
  });

  const handleRefetch = () => {
    refetch();
  };

  return (
    <CategoryProvider>
      <div className="py-5">
        {isLoading || fetchStatus === "fetching" ? (
          <div className="loading loading-dots flex items-center justify-center mt-10 mx-auto"></div>
        ) : topLevelsCategories?.length === 0 || !topLevelsCategories ? (
          <NotFoundItem title={data.category.notFound} />
        ) : (
          topLevelsCategories[params?.ct]?.map((item: TSingleCategory) => (
            <div key={item.id} className="mb-3 flex justify-between">
              <Link to={`${item.id}`} className="text-blue-500">
                {item.title}
              </Link>
              <div className="flex flex-1 justify-end gap-2.5">
                <div
                  onClick={() => {
                    handleCreateModal(item);
                  }}
                  className="border cursor-pointer border-black rounded-full w-4 h-4 flex items-center justify-center bc-green bg-opacity-30"
                >
                  <PlusIcon color="black" size={10} />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleUpdateModal(item);
                  }}
                >
                  <EditIcon size={14} />
                </div>
              </div>
            </div>
          ))
        )}

        <button
          onClick={() => handleCreateModal(null)}
          className="btn-success h-10 py-2 mx-auto mt-10"
        >
          <PlusIcon size={14} />
          {data.category.addCategoryBtn}{" "}
          {params.ct === "services"
            ? data.category.tabs[0].title
            : data.category.tabs[1].title}
        </button>
      </div>

      <Modal
        className="max-w-[444px]"
        title={data.category.create.title}
        modalsRef={createModalsRef}
      >
        <CreateCategory
          createModalsRef={createModalsRef}
          selectedCategory={selectedCategory}
          handleRefetch={handleRefetch}
        />
      </Modal>

      <Modal
        className="max-w-[444px]"
        title={data.category.update.title}
        modalsRef={updateModalsRef}
      >
        <UpdateCategory
          updateModalsRef={updateModalsRef}
          selectedCategory={selectedCategory}
          handleRefetch={handleRefetch}
        />
      </Modal>
    </CategoryProvider>
  );
};

export default TopLevelCategories;
