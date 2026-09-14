import Link from "next/link";
import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage }) => {
  const pageCount = Math.ceil(items / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav className="my-10 flex flex-col items-center">
      <ul className="inline-flex -space-x-px">
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={`/products?page=${page}`}
              className={
                page === currentPage
                  ? "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300"
                  : "py-2 px-3 text-gray-500 bg-white border border-gray-300"
              }
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
