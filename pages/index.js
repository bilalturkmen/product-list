import NavBar from "../components/NavBar";
import Image from "next/image";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <section className="container mx-auto   px-4 md:px-8  ">
      <div className="flex flex-wrap justify-between mb-8 md:mb-16">
        <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-12 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
          <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
            List of your
            <br />
            users
          </h1>

          <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">
            This is a Next js demo for a user list. Thank you for your visit.
            You can reach me by the links below.
          </p>
        </div>

        <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            random image comes here
          </div>
        </div>
      </div>
    </section>
  );
}
