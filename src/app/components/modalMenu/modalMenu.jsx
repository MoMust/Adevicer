'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ModalMenu = ({setShowModal}) => {
  return (
    <div className="font-tomorrow fixed z-50 bg-white w-full h-full ">
      <div className="relative flex justify-center">
        <div className="absolute left-10 top-10">
          <button onClick={() => setShowModal(false)}>
            <Image src="/icons/closeModal.png" width={50} height={50} />
          </button>
        </div>
        <div className="flex flex-col gap-20 p-20 text-3xl">
          <div className="flex gap-2 items-center mb-10">
            <Image
              src="/icons/rocket.svg"
              width={30}
              height={30}
              className=""
              alt="rocket"
            />
            <span className="font-bold lg:text-2xl md:text-xl">Trending</span>
          </div>

          <div className="mb-10">
            <span className="font-bold lg:text-2xl md:text-xl">Categories</span>
            <div className="flex flex-col mt-3">
              <Link href="/categories?cat=Laptops">Laptops</Link>
              <Link href="/categories?cat=Laptops">Phones</Link>
              <Link href="/">Computer gear</Link>
            </div>
          </div>
          <div>
            <span className="font-bold lg:text-2xl md:text-xl">Resources</span>
            <div className="flex flex-col mt-3">
              <Link href="/">About Advicer</Link>
              <Link href="/">Help</Link>
              <Link href="/">Lorem</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
