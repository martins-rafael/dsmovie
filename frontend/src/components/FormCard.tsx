/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import api from "services/api";
import { Movie } from "types/movie";

import SEO from "./SEO";
import FormCardSkeleton from "./FormCardSkeleton";

type FormCardProps = {
  movieId: string;
};

type FormData = {
  email: string;
  score: number;
};

const formSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  score: yup.string().required('Nota obrigatória')
});

const FormCard = ({ movieId }: FormCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<Movie>();

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(formSchema)
  });

  const handleRateMovie: SubmitHandler<FormData> = ({ email, score }) => {
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: '/scores',
      data: { email, movieId, score }
    }

    api(config).then(response => router.push('/'));
  };

  useEffect(() => {
    if (router.isReady) {
      api.get(`movies/${movieId}`).then(response => {
        setMovie(response.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      });
    }
  }, [movieId, router.isReady]);

  if (isLoading) {
    return <FormCardSkeleton />;
  }

  return (
    <>
      <SEO title={`${movie?.title} | DSMovie`} />

      <section className="mb-5 px-2">
        <div className="card max-w-lg mx-auto shadow-lg">
          <figure>
            <img src={movie?.image} alt={movie?.title} />
          </figure>

          <div className="card-body">
            <h3 className="card-title">{movie?.title}</h3>

            <form className="form-control" onSubmit={handleSubmit(handleRateMovie)}>
              <label className="label" htmlFor="email">
                <span className="label-text">Informe seu email</span>
              </label>

              <input
                type="email"
                placeholder="email"
                className={errors.email ?
                  "input input-primary input-bordered input-error" :
                  "input input-primary input-bordered"
                }
                id="email"
                {...register("email")}
              />

              {errors.email && (
                <span className="label-text-alt mt-2 text-red-400">
                  {errors.email.message}
                </span>
              )}

              <label className="label" htmlFor="score">
                <span className="label-text">Informe sua avaliação</span>
              </label>

              <select
                className="select select-bordered select-primary w-full"
                id="score"
                {...register("score")}
              >
                <option disabled>Escolha a nota</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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
      </section>
    </>
  );
}

export default FormCard;
