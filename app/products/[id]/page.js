import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";

async function getProduct(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });

  const data = await response.json();

  return data.products.map((product) => ({
    id: `${product.id}-${product.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const productId = id.split("-")[0];
  const product = await getProduct(productId);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.title} | digital-ist`,
    alternates: {
      canonical: `/products/${id}`,
    },
  };
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const productId = id.split("-")[0];
  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="md:w-2/8 w-2/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-sm"
            src={product.thumbnail}
            alt={product.title}
            width={600}
            height={600}
          />
        </div>

        <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {product.title}
          </h1>
          <p className="mb-8 leading-relaxed">
            <strong className="text-2xl">Price: {product.price} $</strong>
            <br />
            {product.description}
            <br />
            Stock: {product.stock}
          </p>
          <div className="flex justify-center">
            <BackButton />
          </div>
          <br />
          Category: {product.category}
        </div>
      </div>
    </section>
  );
}
