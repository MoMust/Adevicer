import Image from "next/image";
import Link from "next/link";
import React from "react";

// const getData = async () => {
//   const resp = await fetch(
//     `http://localhost:3000/api/categories`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!resp.ok) {
//     throw new Error("Failed");
//   }

//   return resp.json();
// };

const SideBar = () => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-10">
        <Image
          src="/icons/rocket.svg"
          width={30}
          height={30}
          className="hidden md:block"
          alt="rocket"
        />
        <span className="font-bold lg:text-2xl md:text-xl">Trending</span>
      </div>

      <div className="mb-10">
        <span className="font-bold lg:text-2xl md:text-xl">Categories</span>
        <div className="flex flex-col mt-3">
          <Link href="/categories?cat=Laptops0" className="w-fit">
            Laptops
          </Link>
          <Link href="/categories?cat=Phones" className="w-fit">
            Phones
          </Link>
          <Link href="/categories?cat=Computer Gears" className="w-fit">
            Computer gear
          </Link>
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
};

export default SideBar;
