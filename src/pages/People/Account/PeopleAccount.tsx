import Modal from "src/components/Modal";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import getApi from "src/react-query/services/getApi";
import {
  TPeopleAccountData,
  TSinglePeople,
  TSinglePeopleAccount,
} from "src/types/People.types";
import NotifIcon from "src/components/icons/vectors/NotifIcon";
import TrashIcon from "src/components/icons/TrashIcon";
import PlusIcon from "src/components/icons/PlusIcon";
import NotFoundItem from "src/components/NotFoundItem";
import DynamicService from "src/service/DynamicService";
import AddAccountToPeople from "./AddAccountToPeople";
import { formatNumbers } from "src/functions/formatNumbers";

type Props = {
  peopleType: "provider" | "customer";
  selectedPeopleId: number;
  peopleAccountData: TPeopleAccountData;
};

const PeopleAccount = ({
  peopleType,
  selectedPeopleId,
  peopleAccountData,
}: Props) => {
  const modalsRef = useRef<HTMLDialogElement | null>(null);

  const handleModal = () => {
    modalsRef.current && modalsRef.current.showModal();
  };

  const params = useParams();

  const {
    data: peoples,
    isPending,
    refetch,
  } = getApi<TSinglePeople>({
    queryKey: [peopleType, selectedPeopleId],
    service: `people/${peopleType}/${params.bid}/${selectedPeopleId}`,
    serviceKey: peopleType,
  });

  const deleteAccount = (id: number) => {
    DynamicService({
      method: "delete",
      service: `people/${peopleType}/acc/${params.bid}/${selectedPeopleId}/${id}`,
    }).then((response: any) => response.status === 200 && refetchAccounts());
  };

  const refetchAccounts = () => {
    refetch();
  };

  return (
    <div>
      <div className="space-y-3">
        {isPending ? (
          <div className="loading loading-dots c-primary mx-auto block"></div>
        ) : peoples?.accounts.length === 0 ? (
          <NotFoundItem title={peopleAccountData.notFound} />
        ) : (
          peoples?.accounts.map((item: TSinglePeopleAccount) => (
            <div className="flex justify-between items-center px-3 py-3 rounded-2xl bc-secondary">
              <div className="flex items-center gap-2.5">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white">
                  <NotifIcon size={22} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className=" flex gap-2">
                    <span className="family-bold">
                      {formatNumbers(item.card_number, false)}
                    </span>
                    <span className="text-xs family-regular text-opacity-20">
                      ({item.bank})
                    </span>
                  </div>
                  <div className="family-light text-[10px]">
                    {formatNumbers(item.shaba_number, false)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => deleteAccount(item.id)}
                  className="btn-light-danger rounded-[4.5px] px-3.5 h-8 text-xs "
                >
                  <TrashIcon size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <button onClick={handleModal} className="btn-success h-10 mt-5 mx-auto">
        <div className="border-2 border-white p-1 rounded-full">
          <PlusIcon size={10} />
        </div>
        {peopleAccountData.create.title}
      </button>

      <Modal title={peopleAccountData.create.title} modalsRef={modalsRef}>
        <AddAccountToPeople
          peopleAccountData={peopleAccountData}
          peopleType={peopleType}
          refetchAccounts={refetchAccounts}
          modalsRef={modalsRef}
          selectedPeopleId={selectedPeopleId}
        />
      </Modal>
    </div>
  );
};

export default PeopleAccount;
