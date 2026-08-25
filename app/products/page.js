import ProductList from "./ProductList";

export const metadata = {
  alternates: {
    canonical: "/products",
  },
};

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });

  const data = await response.json();

  return data.products;
}

export default async function ProductsPage({ searchParams }) {
  const products = await getProducts();
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);

  return <ProductList products={products} currentPage={currentPage} />;
}
