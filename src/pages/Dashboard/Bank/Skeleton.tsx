const Skeleton = () => {
  return (
    <div className="my-2 mx-4 flex justify-between items-center px-2 py-1.5 rounded-2xl bc-secondary">
      <div className="flex items-center gap-2.5">
        <div className="skeleton h-12 w-12 flex items-center justify-center rounded-xl">
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="family-bold text-sm skeleton h-2 w-10"></span>
          <span className="text-xs skeleton h-2 w-10"></span>
        </div>
      </div>
      <div className="flex items-center text-sm gap-2 pe-2">
        <span className="skeleton w-10 h-2"></span>
      </div>
    </div>
  );
};

export default Skeleton;
