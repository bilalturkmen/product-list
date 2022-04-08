import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../utils/paginate";
import Link from "next/link";
import Image from "next/image";

export default function UserListPage({ users }) {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(users, currentPage, pageSize);

  return (
    <div className="py-6 sm:py-8 lg:py-12 ">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Meet our Team
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is an example users data from api.github.com/users.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
          {paginatePosts.map((user) => (
            <div
              key={user.id}
              className="flex flex-col sm:flex-row items-center gap-2 md:gap-4"
            >
              <div className="w-24 md:w-24 h-24 md:h-24 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <Image src={user.logo} alt="user" width={120} height={120} />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  <Link href={`/our-team/${user.id}`}>
                    <a>{`${user.name}`}</a>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  {user.job_title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          items={users.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/users`);
  const data = await res.json();

  return {
    props: { users: data },
  };
};
