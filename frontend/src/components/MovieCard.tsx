/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Movie } from "types/movie";
import MovieScore from "./MovieScore";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img src={movie.image} alt={movie.title} />
      </figure>

      <div className="card-body justify-between">
        <h3 className="font-bold text-center min-h-[5rem]">{movie.title}</h3>

        <MovieScore score={movie.score} count={movie.count} />

        <div className="card-actions">
          <Link href={`/form/${movie.id}`}>
            <a className="btn btn-primary btn-block">Avaliar</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
