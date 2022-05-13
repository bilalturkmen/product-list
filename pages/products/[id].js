import Image from "next/image";
import { useRouter } from "next/router";
import HeadComponent from "../../components/Head";

export default function UserDetails({ user }) {
  const router = useRouter();
  return (
    <>
      <HeadComponent canonicalUrl={``} />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-2/8 w-2/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              src={user.thumbnail}
              alt="product"
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {user.title}
            </h1>
            <p className="mb-8 leading-relaxed">
              <strong className="text-2xl">Price: {user.price} $</strong>
              <br />
              {user.description}
              <br />
              Stock: {user.stock}
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Go Back
              </button>
            </div>
            <br />
            Category: {user.category}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const paths = data.products.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};
