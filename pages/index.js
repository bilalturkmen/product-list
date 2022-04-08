import SocialMedia from "../components/SocialMedia";
import { getAllUsers } from "../data/data";

export default function Home() {
  const allUsers = getAllUsers();

  return (
    <section className="container mx-auto   px-2 md:px-4  ">
      <div className="flex flex-wrap justify-between mb-8 md:mb-16">
        <div className="w-full lg:w-2/3 flex flex-col justify-center lg:pt-12 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
          <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
            List of your
            <br />
            team
          </h1>

          <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed pb-6">
            This is a user list demo built with Next js. Used api for fetching
            user data and Tailwind CSS for page design.
          </p>
          <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">
            Thank you for your visit. You can reach me by the links below.
          </p>
          <SocialMedia></SocialMedia>
        </div>

        <div className="w-full lg:w-1/3 flex mb-12 md:mb-16">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            random image comes here
          </div>
        </div>
      </div>
    </section>
  );
}
