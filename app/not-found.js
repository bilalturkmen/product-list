import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-(--breakpoint-lg) px-4 md:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
            <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
              Error 404
            </p>

            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
              Page not found
            </h1>

            <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              href="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring-3 ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-hidden transition duration-100 px-8 py-3"
            >
              Go Back
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/not-found.webp"
              width={400}
              height={400}
              alt="Not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
