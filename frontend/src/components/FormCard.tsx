/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import api from "services/api";
import { Movie } from "types/movie";

type FormCardProps = {
  movieId: string;
};

const FormCard = ({ movieId }: FormCardProps) => {
  const [movie, setMovie] = useState<Movie>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      api.get(`movies/${movieId}`)
        .then(response => setMovie(response.data));
    }
  }, [movieId, router.isReady]);

  return (
    <div className="card mb-5 max-w-lg mx-auto shadow-lg">
      <figure>
        <img src={movie?.image} alt={movie?.title} />
      </figure>

      <div className="card-body">
        <h3 className="card-title">{movie?.title}</h3>

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

        <Link href="/">
          <a className="btn btn-outline btn-primary btn-block mt-3">
            Cancelar
          </a>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
