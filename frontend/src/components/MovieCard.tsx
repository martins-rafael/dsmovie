/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MovieScore from "./MovieScore";

const MovieCard = () => {
  const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
  };

  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img src={movie.image} alt={movie.title} />
      </figure>

      <div className="card-body">
        <h3 className="card-title text-center">{movie.title}</h3>

        <MovieScore />

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
