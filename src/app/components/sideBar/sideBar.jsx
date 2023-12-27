import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SideBar = () => {
  return (
    <div className="border col-span-2 pl-7 pt-20 font-tomorrow">
      <div className="flex gap-2 items-center mb-10">
        <Image
          src="/icons/rocket.svg"
          width={30}
          height={30}
          className="hidden md:block"
        />
        <span className="font-bold lg:text-2xl md:text-xl">Trending</span>
      </div>

      <div className="mb-10">
        <span className="font-bold lg:text-2xl md:text-xl">Categories</span>
        <div className="flex flex-col mt-3">
          <Link href="/">Laptops</Link>
          <Link href="/">Phones</Link>
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
  );
}

export default SideBar