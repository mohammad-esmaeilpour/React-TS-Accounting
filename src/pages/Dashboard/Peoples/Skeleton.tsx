const Skeleton = () => {
  return (
    <div className="my-4 mx-4 justify-between items-center px-2 py-1.5 rounded-2xl bc-secondary">
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-12 flex items-center justify-center rounded-xl skeleton"></div>
        <div className="flex-col flex gap-1.5">
          <div className="flex gap-2.5 text-xs skeleton w-20 h-2 my-1" ></div>
          <div className="flex items-center text-xs skeleton w-20 h-2 my-1"></div>
        </div>
      </div>
      <div className="flex flex-col mt-4 px-2 gap-2">
        <div className="flex items-center text-xs skeleton w-20 h-2 my-1"></div>
        <div className="flex items-center text-xs skeleton w-20 h-2 my-1"></div>
        <div className="flex items-center text-xs skeleton w-20 h-2 my-1"></div>
      </div>
    </div>
  );
};

export default Skeleton;
