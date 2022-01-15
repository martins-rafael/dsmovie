const PaginationSkeleton = () => {
  return (
    <div className="flex items-center justify-between mx-auto max-w-[180px] animate-pulse">
      <button className="btn btn-square" disabled/>
      <p className="bg-white opacity-5 rounded-sm">00 de 00</p>
      <button className="btn btn-square" disabled/>
    </div>
  );
};

export default PaginationSkeleton;
