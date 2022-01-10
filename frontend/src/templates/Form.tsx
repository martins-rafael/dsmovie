/* eslint-disable @next/next/no-img-element */
const FormTemplate = () => {
  const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
  };

  return (
    <div className="card mb-5 max-w-lg mx-auto shadow-lg">
      <figure>
        <img src={movie.image} alt={movie.title} />
      </figure>

      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>

        <form className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Informe seu email</span>
          </label>

          <input
            type="email"
            placeholder="email"
            className="input input-primary input-bordered"
            id="email"
          />

          <label className="label" htmlFor="score">
            <span className="label-text">Informe sua avaliação</span>
          </label>

          <select className="select select-bordered select-primary w-full" id="score">
            <option disabled selected>Escolha a nota</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <button type="submit" className="btn btn-primary btn-block mt-6">
            Salvar
            </button>
        </form>

        <button className="btn btn-outline btn-primary btn-block mt-3">
          Cancelar
          </button>
      </div>
    </div>
  );
}

export default FormTemplate;
