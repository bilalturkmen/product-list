import SocialMedia from "../components/SocialMedia";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });

  const data = await response.json();

  return data.products.slice(0, 12);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <section className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
            Product List
          </h1>

          <p className="text-gray-500 xl:text-lg leading-relaxed mb-6">
            This is a demo product list built with Next js. It uses a REST API
            for fetching data and Tailwind CSS for page design.
          </p>

          <p className="text-gray-500 xl:text-lg leading-relaxed">
            Thank you for visiting. Feel free to reach out via the links below.
          </p>

          <SocialMedia />
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id}>
                <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
                  <Link
                    href={`/products/${product.id}-${product.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <Image
                      alt="team"
                      className="w-16 h-16 bg-slate-50 object-cover object-center shrink-0 rounded-full"
                      src={product.thumbnail}
                      width={60}
                      height={60}
                    />
                  </Link>

                  <div className="grow ml-4">
                    <Link
                      href={`/products/${product.id}-${product.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}`}
                    >
                      <h2 className="text-indigo-500 title-font font-bold">
                        {product.title}
                      </h2>
                    </Link>

                    <p className="text-gray-500">{product.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
