import { MoviePage } from "types/movie";

type PaginationProps = {
  page: MoviePage
  onChange: (pageNumber: number) => void;
};

const Pagination = ({ page, onChange }: PaginationProps) => {
  const { number, totalPages, first, last } = page;

  return (
    <div className="flex items-center justify-between mx-auto max-w-[180px]">
      <button
        className="btn btn-square"
        disabled={first}
        onClick={() => onChange(number - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <p>{`${number + 1} de ${totalPages}`}</p>

      <button
        className="btn btn-square"
        disabled={last}
        onClick={() => onChange(number + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2" d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
