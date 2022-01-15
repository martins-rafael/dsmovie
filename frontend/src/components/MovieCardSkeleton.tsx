const MovieCardSkeleton = () => {
  return (
    <div className="card shadow-xl image-full animate-pulse opacity-5">
      <div className="card-body justify-between items-start">

        <div className="w-full min-h-[2rem] bg-white opacity-5 rounded-sm"/>
        <div className="mt-4 w-full min-h-[2rem] bg-white opacity-5 rounded-sm"/>

          <div className="my-2 w-5/6 h-6 bg-[#FFBB3A] opacity-5 rounded-sm" />
          <div className="w-4/6 h-6 bg-[#FFBB3A] opacity-5 rounded-sm" />

          <div className="mt-2 w-20 h-[1.25rem] bg-white opacity-5 rounded-sm" />
            

        <div className="card-actions">
          <a className="btn btn-primary btn-block opacity-5">
            <p className="bg-white opacity-5 rounded-sm">
              Lorem ipsum dolor sit.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
