"use client";

import Link from "next/link";
import Image from "next/image";
import Pagination from "../../components/Pagination";
import { paginate } from "../../utils/paginate";

export default function ProductList({ products, currentPage }) {
  const pageSize = 9;

  const paginatedProducts = paginate(products, currentPage, pageSize);

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-(--breakpoint-xl) px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Meet our Products
          </h2>

          <p className="max-w-(--breakpoint-md) text-gray-500 md:text-lg text-center mx-auto">
            This is an example products data from
            https://dummyjson.com/products.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center gap-2 md:gap-4"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <Link
                  href={`/products/${product.id}-${product.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                >
                  <Image
                    alt="product"
                    className="w-24 h-24 bg-slate-50 object-cover object-center shrink-0 rounded-full"
                    src={product.thumbnail}
                    width={120}
                    height={120}
                  />
                </Link>
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  <Link
                    href={`/products/${product.id}-${product.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    {product.title}
                  </Link>
                </div>

                <p className="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  {product.brand}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          items={products.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
