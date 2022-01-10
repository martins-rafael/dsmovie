import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

const MovieStars = () => {
  return (
    <div className="flex justify-between w-36">
      <FaStar size={22} color="#FFBB3A" />
      <FaStar size={22} color="#FFBB3A" />
      <FaStar size={22} color="#FFBB3A" />
      <FaStarHalfAlt size={22} color="#FFBB3A" />
      <FaRegStar size={22} color="#FFBB3A" />
    </div>
  );
}

export default MovieStars;
