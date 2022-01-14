import { useEffect, useState } from "react";

import api from "services/api";
import { MoviePage } from "types/movie";

import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

const ListingTemplate = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const { content } = page;

  useEffect(() => {
    api.get(`movies?size=12&page=${pageNumber}`)
      .then(response => {
        const data: MoviePage = response.data;
        setPage(data);
      });
  }, [pageNumber]);

  return (
    <>
      <Pagination />
      <div
        className="container mx-auto my-8 grid grid-cols-1 gap-8
        xl:grid-cols-4 lg:grid-cols-3 px-2"
      >
        {content.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default ListingTemplate;
