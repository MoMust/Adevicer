import React from "react";
// import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" h-60 border relative box-border mainContainer">
      <div className="flex gap-5 lg:justify-between m-5 contentContainer">
        <div className="imageContainer">
          <Image
            src="/logo/AdvicerLogo.png"
            className="rounded-lg"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <div className="mt-10 flex text-center headerContainer">
          <h1 className="text-xl lg:text-5xl sm:text-3xl font-tomorrow">
            Welcome to the greatest{" "}
            <span className="bg-black text-white p-1 md:font-bold">
              Advicer
            </span>{" "}
            <br></br>for you gadgets
          </h1>
        </div>
        <div className="hidden lg:flex gap-3 text-xl h-10 text-2xl linksContainer">
          <Link href="/" className="group">
            Home
            <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link href="/" className="group">
            Write
            <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link href="/" className="group">
            Login
            <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
        </div>
        <button className="lg:hidden absolute right-10 bottom-10">
          <Image src="/icons/hamMenu.svg" width={30} height={30} alt="hamburger"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
