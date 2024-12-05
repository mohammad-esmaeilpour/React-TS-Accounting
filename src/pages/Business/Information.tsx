import { useEffect, useState } from "react";
import BusinessStepper from "./_components/BusinessStepper";
import { TSingleBusiness } from "src/types/Business.type";
import { useQuery } from "@tanstack/react-query";

const BusinessInformation = () => {
  const [business, setBusiness] = useState<TSingleBusiness | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { data: getBusiness, isPending } = useQuery<TSingleBusiness>({
    queryKey: ["business"],
    staleTime: Infinity,
  });

  useEffect(() => {
    getBusiness && setBusiness(getBusiness);
  }, [getBusiness]);

  return (
    <div className="panel flex items-center justify-center">
      <div className="rounded-2xl mx-auto w-screen max-w-xl overflow-auto h-full py-10">
        {isPending ? (
          <div className="loading loading-dots m-auto block mt-20"></div>
        ) : (
          <BusinessStepper
            business={business!}
            setBusiness={setBusiness}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        )}
      </div>
    </div>
  );
};

export default BusinessInformation;
