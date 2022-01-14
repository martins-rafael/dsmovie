import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";


const ListingTemplate = () => {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
      .then(response => {
        const data: MoviePage = response.data;
        console.log(data);
        setPageNumber(data.number);
      });
  }, []);

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
