import MovieStars from "./MovieStars";

type MovieScoreProps = {
  score: number;
  count: number;
};

const MovieScore = ({ score, count }: MovieScoreProps) => {
  return (
    <div className="flex items-center flex-col">
      <p className="mb-2 text-[#FFBB3A] font-bold">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>

      <MovieStars score={score} />

      <p className="mt-2 text-sm">
        {count} avaliações
      </p>
    </div>
  );
}

export default MovieScore;
