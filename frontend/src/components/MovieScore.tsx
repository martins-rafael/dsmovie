import MovieStars from "./MovieStars";

const MovieScore = () => {
  const score = 3.5;
  const count = 13;

  return (
    <div className="flex items-center flex-col">
      <p className="mb-2 text-[#FFBB3A] font-bold">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>

      <MovieStars />

      <p className="mt-2 text-sm">
        {count} avaliações
      </p>
    </div>
  );
}

export default MovieScore;
