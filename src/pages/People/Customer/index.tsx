import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "src/components/Forms/SearchForm";
import Modal from "src/components/Modal";
import { DataProps } from "src/data/fa";
import getApi from "src/react-query/services/getApi";
import { useAppSelector } from "src/store/store";
import { TSinglePeople } from "src/types/People.types";
import BankListSkeleton from "src/components/Skeleton/BankListSkeleton";
import NotFoundItem from "src/components/NotFoundItem";
import PeopleList from "../List";
import DynamicService from "src/service/DynamicService";
import PeopleAccount from "../Account/PeopleAccount";

const Customer = () => {
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const [filteredCustomers, setFilteredCustomers] = useState<
    TSinglePeople[] | null
  >(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );

  const skeleton = [1, 2, 3, 4];

  const modalsRef = useRef<HTMLDialogElement | null>(null);

  const params = useParams();

  const handleModal = (id: number) => {
    setSelectedCustomerId(id);
    modalsRef.current && modalsRef.current.showModal();
  };

  const {
    data: customers,
    isPending,
    refetch,
  } = getApi<TSinglePeople[]>({
    queryKey: ["customers"],
    service: `people/customer/${params.bid}/max`,
    serviceKey: "customers",
  });

  const deletePeople = (id: number) => {
    DynamicService({
      method: "delete",
      service: `people/customer/${params.bid}/${id}`,
    }).then((response: any) => response.status === 200 && refetchPeoples());
  };

  const refetchPeoples = () => {
    refetch();
  };

  return (
    <div className="panel flex flex-col">
      <div className="flex sticky top-0 bg-white z-10 w-full justify-between items-center border-b py-5 px-5 mb-7">
        <h1 className="family-regular text-xl">{data.customer.title}</h1>
      </div>

      <div className="mx-4 justify-between flex mb-8">
        <div className="flex gap-2.5 flex-1">
          <SearchForm
            placeholder={data.customer.searchPlaceholder}
            objectList={customers!}
            setFilteredList={setFilteredCustomers}
            searchKeys={["first_name", "last_name", "nick_name", "description"]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-3 px-5">
        {isPending ? (
          skeleton.map((item) => <BankListSkeleton key={item} />)
        ) : filteredCustomers?.length === 0 ? (
          <NotFoundItem title={data.customer.notFound} />
        ) : (
          filteredCustomers?.map((item) => (
            <PeopleList
              deletePeople={deletePeople}
              handleModal={handleModal}
              item={item}
              key={item.id}
            />
          ))
        )}
      </div>

      <Modal title={data.customer.title!} modalsRef={modalsRef}>
        {selectedCustomerId && (
          <PeopleAccount
            peopleType="customer"
            peopleAccountData={data.customer.accounts}
            selectedPeopleId={selectedCustomerId}
          />
        )}
      </Modal>
    </div>
  );
};

export default Customer;
