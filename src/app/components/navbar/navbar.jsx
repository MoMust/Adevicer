'use client'

import React, { useState } from "react";
// import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ModalMenu from "../modalMenu/modalMenu";

const Navbar = () => {

  const [showModal, setShowModal] = useState(true)


  return (
    <div className=" h-68 lg:h-60 border relative box-border mainContainer">
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
        <div className="font-tomorrow mt-28 lg:flex gap-3 text-xl h-10 text-2xl linksContainer">
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
        {showModal && <ModalMenu setShowModal={setShowModal}/>}
      </div>
        <button className="lg:hidden pl-10" onClick={() => setShowModal(!showModal)}>
          <Image src="/icons/hamMenu.svg" width={40} height={40} alt="hamburger"/>
        </button>
    </div>
  );
};

export default Navbar;
