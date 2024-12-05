const FindProductsSkeleton = () => {
  return (
      <div className="flex justify-between items-center px-3 py-3 transition-all rounded-2xl bc-secondary">
        <div className="flex items-center gap-2.5">
          <div className="h-12 w-12 flex items-center justify-center rounded-2xl skeleton"></div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="family-bold skeleton w-24 h-2"></span>
            </div>
            <div className="family-light text-[10px] skeleton w-20 h-2"></div>
          </div>
        </div>
        <div className="rating">
          <div>
            <div className="relative flex items-center justify-center cursor-pointer skeleton"></div>
          </div>
        </div>
      </div>
  );
};

export default FindProductsSkeleton;
