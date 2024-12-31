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

  return (
    <div className=" h-68 lg:h-60 border relative box-border mainContainer">
      <div className="grid grid-cols-5 contentContainer">
        <div className="imageContainer">
          <Image
            src="/logo/AdvicerLogo.png"
            className="rounded-lg"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <div className="col-span-3 mt-10 flex justify-center headerContainer">
          <h1 className="text-center text-xl lg:text-5xl sm:text-3xl font-tomorrow">
            Welcome to the greatest{" "}
            <span className="bg-black text-white p-1 md:font-bold">
              Advicer
            </span>{" "}
            <br></br>for you gadgets
          </h1>
        </div>
        <div className="flex flex-col gap-5 ">
          {status === "authenticated" ? (
            <div className="flex flex-col items-center gap-3 justify-center">
              <div className="">
                <span className="text-2xl font-tomorrow"> Welcome</span>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/icons/userIcon.png"
                  width={40}
                  height={40}
                  alt="userIcon"
                />
              </div>
              <div className="bg-black text-white w-9/12 flex items-center justify-center">
                <p className="text-center font-bold text-lg">
                  {data?.user?.name}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-2xl font-tomorrow"> Welcome</span>
            </div>
          )}

          <div className="font-tomorrow lg:flex justify-center gap-3 text-xl h-10 text-2xl linksContainer">
            <Link href="/" className="group text-sm md:text-xl">
              Home
              <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
            {status === "authenticated" ? (
              <div className="flex gap-3 lg:flex-row sm:flex-col gap-3 text-xl h-10 text-2xl linksContainer">
                <Link href="/write" className="group text-sm md:text-xl">
                  Write
                  <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
                <Link
                  className="group text-sm md:text-xl"
                  href="#"
                  onClick={signOut}
                >
                  Logout
                  <div className="cursor-pointer bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
              </div>
            ) : (
              <Link href="/login" className="group text-sm md:text-xl">
                Login
              </Link>
            )}
          </div>
        </div>
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
