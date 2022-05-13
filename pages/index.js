import SocialMedia from "../components/SocialMedia";
import Head from "../components/Head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ users }) {
  return (
    <>
      <Head canonicalUrl={`https://digital-ist.com`} />
      <section className="container mx-auto px-2 md:px-4  ">
        <div className="flex flex-wrap justify-between mb-8 md:mb-16">
          <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-12 lg:pb-24  sm:mb-12 lg:mb-0 px-5 md:px-0 pt-10 sm:pt-24">
            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
              Product List
            </h1>

            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed pb-6">
              This is a demo product list, built with Next js. Used Rest Api for
              fetching data and Tailwind CSS for page design.
            </p>
            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">
              Thank you for your visit. You can reach me by the links below.
            </p>
            <SocialMedia></SocialMedia>
          </div>

          <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
            <div className="container px-5 py-5 sm:py-24 mx-auto">
              <div className="flex flex-wrap -m-2">
                {users.map((user) => (
                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={user.id}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <Link href={`/products/${user.id}`}>
                        <a>
                          <Image
                            alt="team"
                            className="w-16 h-16 bg-slate-50 object-cover object-center flex-shrink-0 rounded-full "
                            src={user.thumbnail}
                            width={60}
                            height={60}
                          />
                        </a>
                      </Link>
                      <div className="flex-grow ml-4">
                        <Link href={`/products/${user.id}`}>
                          <a>
                            <h2 className="text-indigo-500 title-font font-bold ">
                              {user.title}
                            </h2>
                          </a>
                        </Link>
                        <p className="text-gray-500">{user.brand} </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async (context) => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { users: data.products.slice(0, 12) },
  };
};
