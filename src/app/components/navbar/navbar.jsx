import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" h-60 border relative box-border">
      <div className="flex justify-between m-5">
        <div className="">
          <Image
            src="/logo/AdvicerLogo.png"
            className="rounded-lg"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="mt-10 flex text-center">
          <h1 className="lg:text-5xl sm:text-3xl font-tomorrow">
            Welcome to the greatest{" "}
            <span className="bg-black text-white p-1 md:font-bold">
              Advicer
            </span>{" "}
            <br></br>for you gadgets
          </h1>
        </div>
        <div className="hidden md:flex gap-3 text-xl h-10 text-2xl">
          <Link href="/" className="group">
            Home
            <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link href="/" className="group">
            Write
            <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link href="/" className="group">
            Login
            <div class="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
        </div>
        <button className="md:hidden absolute right-10 bottom-10">
          <Image src="/icons/hamMenu.svg" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
