const FormCardSkeleton = () => {
  return (
    <section className="mb-5 px-2">
      <div className="card max-w-lg mx-auto shadow-lg animate-pulse">
        <div className="w-full h-64 bg-gray-900 opacity-50" />

        <div className="card-body">
          <h3 className="card-title bg-white opacity-5 rounded-sm">
            Lorem ipsum dolor sit amet.
          </h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text bg-white opacity-5 rounded-sm">
                Lorem ipsum dolor sit amet.
              </span>
            </label>

            <input disabled className="input input-primary input-bordered opacity-5" />

            <label className="label">
              <span className="label-text bg-white opacity-5 rounded-sm">
                Lorem ipsum dolor sit amet.
              </span>
            </label>

            <input disabled className="input input-primary input-bordered opacity-5" />

            <button disabled className="btn btn-block mt-6" />
          </div>

          <button disabled className="btn btn-block mt-3" />
        </div>
      </div>
    </section>
  );
}

export default FormCardSkeleton;
