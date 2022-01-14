import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type StarProps = {
  fill: number;
};

const Star = ({ fill }: StarProps) => {
  const color = "#FFBB3A";
  const size = 22;
  
  return (
    fill === 0 ? <FaRegStar size={size} color={color} />
    : fill === 1 ?  <FaStar size={size} color={color} />
    : <FaStarHalfAlt size={size} color={color} />
  );
}

export default Star;
