"use client";

import React, { useState } from "react";
// import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ModalMenu from "../modalMenu/modalMenu";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data, status } = useSession();
  const [showModal, setShowModal] = useState(false);
  console.log("data", data?.user?.name);

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
          {status === "authenticated" ? (
            <div className="flex gap-3 lg:flex-row sm:flex-col gap-3 text-xl h-10 text-2xl linksContainer">
              <Link href="/" className="group">
                Write
                <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
              <Link className="group" href="#" onClick={signOut}>
                Logout
                <div className="cursor-pointer bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </div>
          ) : (
            <Link href="/login" className="group">
              Login
            </Link>
          )}
        </div>
        <span className="text-2xl font-tomorrow">
          {" "}
          Welcome {data?.user?.name}
        </span>
        {showModal && <ModalMenu setShowModal={setShowModal} />}
      </div>
      <button
        className="lg:hidden pl-10"
        onClick={() => setShowModal(!showModal)}
      >
        <Image
          src="/icons/hamMenu.svg"
          width={40}
          height={40}
          alt="hamburger"
        />
      </button>
    </div>
  );
};

export default Navbar;
