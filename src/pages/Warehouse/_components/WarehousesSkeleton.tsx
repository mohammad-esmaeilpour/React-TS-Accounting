const WarehousesSkeleton = () => {
  return (
    <div className="flex justify-between items-center px-3 py-3 rounded-2xl bc-secondary">
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-12 rounded-2xl skeleton"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-3 w-12"></div>
          <div className="skeleton h-2 w-12"></div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="w-28 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
        <div className="w-28 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
        <div className="w-28 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
        <div className="w-28 rounded-[4.5px] px-3.5 h-8 text-xs skeleton"></div>
        <div className="rounded-[4.5px] px-2 h-8"></div>
      </div>
    </div>
  );
};

export default WarehousesSkeleton;
