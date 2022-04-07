import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font border-b mb-8 bg-white  ">
      <div className="container mx-auto   flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex items-center font-bold   text-gray-900 mb-4 md:mb-0">
          <Image
            src="/digital_ist.svg"
            alt="digital-ist"
            width={42}
            height={42}
          />

          <span className="ml-3 text-2xl">digital-ist</span>
        </a>{" "}
        <span className="hidden md:block ml-6 italic">
          {" "}
          {` </ digital istanbul />`}
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">User List</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
