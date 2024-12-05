const AllSubUserSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 px-5">
      <div className="flex flex-col pt-2.5 px-3 pb-3 rounded-2xl odd:bc-secondary">
        <div className="flex justify-between border-b pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="h-12 w-12 rounded-2xl skeleton"></div>
            <div className="flex flex-col gap-2">
              <div className="skeleton h-3 w-12"></div>
              <div className="skeleton h-2 w-12"></div>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-24 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
            <div className="w-24 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
            <div className="w-24 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
            <div className="w-24 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
            <div className="rounded-[4.5px] px-2 h-8"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-[205px] h-12 rounded-2xl flex items-center justify-center skeleton"></div>
          <div className="w-[205px] h-12 rounded-2xl flex items-center justify-center skeleton"></div>
          <div className="w-[205px] h-12 rounded-2xl flex items-center justify-center skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default AllSubUserSkeleton;
