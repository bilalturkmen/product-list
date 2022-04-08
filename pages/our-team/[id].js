import Link from "next/link";
import Image from "next/image";

export default function UserDetails({ user }) {
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className=" md:w-2/8 w-2/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            src={user.logo}
            alt="hero"
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {user.name}
          </h1>
          <p className="mb-8 leading-relaxed">
            Company: {user.company}
            <br />
            Job Title: {user.job_title}
            <br />
            Email: {user.email}
            <br />
          </p>
          <div className="flex justify-center">
            <Link href={`/our-team`}>
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go Back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();

  const paths = data.map((user) => {
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
  const res = await fetch(`http://localhost:3000/users/${context.params.id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
};
