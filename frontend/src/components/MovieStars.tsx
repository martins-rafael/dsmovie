import Star from "./Star";

type MovieStarsProps = {
  score: number;
};

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {
  const fills = [0, 0, 0, 0, 0];
  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;

  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

const MovieStars = ({ score }: MovieStarsProps) => {
  const fills = getFills(score);

  return (
    <div className="flex justify-between w-36">
      {fills.map((fill, index) => <Star key={index} fill={fill} />)}
    </div>
  );
}

export default MovieStars;
