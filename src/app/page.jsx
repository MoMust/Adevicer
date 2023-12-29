import Image from "next/image";
import Gadgets from "./components/showGadgets/page";
import ReviewList from "./components/reviewList/reviewList";
import Link from "next/link";
import SideBar from "./components/sideBar/sideBar";
import ReviewCard from "./components/reviewCard/reviewCard";
export default function Home() {
  return (
    <div className=" grid grid-cols-10 min-h-screen">
      <div className="border hidden lg:block col-span-2 pl-7 pt-20 font-tomorrow">
        <SideBar />
      </div>
      <div className="font-tomorrow lg:col-span-6 col-span-10 flex flex-col items-center gap-14 justify-center card-container">
        <div className="mt-8 flex align-center flex-col">
          <label for="search" className="pr-3 mb-3 text-2xl ">
            Type to search...
          </label>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              name="search"
              className="border w-96 h-10 pl-5"
            ></input>
            <button className="border bg-black text-white w-28 h-12 font-bold">Search...</button>
          </div>
        </div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
