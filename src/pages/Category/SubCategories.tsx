import { createRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import EditIcon from "src/components/icons/EditIcon";
import PlusIcon from "src/components/icons/PlusIcon";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import CategoryProvider from "./CategoryProvider";
import Modal from "src/components/Modal";
import UpdateCategory from "./UpdateCategory";
import CreateCategory from "./CreateCategory";
import { TSingleCategory } from "src/types/Category.types";
import LeftArrowIcon from "src/components/icons/LeftArrowIcon";
import NotFoundItem from "src/components/NotFoundItem";

const SubCategories = () => {
  // state
  const [selectedCategory, setSelectedCategory] =
    useState<TSingleCategory | null>(null);

  // hooks
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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
    data: subCategories,
    refetch,
    isPending: isPendingSubCat,
  } = getApi<TSingleCategory[]>({
    queryKey: ["subCategories", getId[getId.length - 1]],
    service: `category/${params.ct}/children/${params.bid}/${
      getId[getId.length - 1]
    }`,
    serviceKey: "children",
  });

  // service
  const {
    data: categoryBreadcrumb,
    isPending: isPendingCategroyBread,
  } = getApi<{ title: string; id: number }[]>({
    queryKey: ["categoryBreadcrumb", getId],
    service: `category/parents/${params.bid}/${getId[getId.length - 1]}`,
    serviceKey: "parents",
    params: {
      type: params.ct,
    },
  });

  const handleRefetch = () => {
    refetch();
  };

  return (
    <CategoryProvider>
      <div>
        <div className="bg-white my-5 flex justify-between rounded-xl gap-5 py-2 px-4 mb-5">
          <div className="breadcrumbs">
            <ul>
              {isPendingCategroyBread ? (
                <div className="loading loading-dots"></div>
              ) : (
                categoryBreadcrumb?.map((item) => (
                  <li
                    key={item.id}
                    className="text-[13px] text-blue-500 family-medium"
                  >
                    <Link
                      to={`${location.pathname.slice(
                        0,
                        location.pathname.indexOf(String(item.id)) +
                          String(item.id).length
                      )}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        {isPendingSubCat ? (
          <div className="loading loading-dots flex items-center justify-center mt-10 mx-auto"></div>
        ) : subCategories?.length === 0 || !subCategories ?  (
          <div className="flex flex-col items-center">
            <NotFoundItem title={data.category.notFound} />
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <div className="c-primary family-regular text-xs">
                {data.category.go_back}
              </div>
              <LeftArrowIcon color="rgb(36, 58, 115)" size={11} />
            </button>
          </div>
        ) : (
          subCategories?.map((item) => (
            <div key={item.id} className="mb-3 flex justify-between">
              <Link
                key={item.id}
                onClick={handleRefetch}
                to={`${location.pathname}/${item.id}`}
                className="text-blue-500"
              >
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

export default SubCategories;
