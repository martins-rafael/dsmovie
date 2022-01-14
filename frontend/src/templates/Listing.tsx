import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

const ListingTemplate = () => {
  axios.get(`${BASE_URL}/movies`)
    .then(response => console.log(response.data));

  return (
    <>
      <Pagination />
      <div
        className="container mx-auto my-8 grid grid-cols-1 gap-8
        xl:grid-cols-4 lg:grid-cols-3 px-2"
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default ListingTemplate;
