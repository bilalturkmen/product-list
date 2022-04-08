import Link from "next/link";
import Image from "next/image";

export default function UserItem(props) {
  const { id, logo, name, email, company, job_title } = props;

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            src={logo}
            alt="hero"
          ></Image>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {name}
          </h1>
          <p className="mb-8 leading-relaxed">
            {company}
            <br />
            {job_title}
            <br />
            {email}
            <br />
          </p>
          <div className="flex justify-center">
            <Link href={`/our-team/${id}`}>
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
