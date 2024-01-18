"use client";

import Image from "next/image";
import Gadgets from "./components/showGadgets/page";
import ReviewList from "./components/reviewList/reviewList";
import Link from "next/link";
import SideBar from "./components/sideBar/sideBar";
import ReviewCard from "./components/reviewCard/reviewCard";
import ModalMenu from "./components/modalMenu/modalMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [searchValue, setSearchValue] = useState(""); // Set search value
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //Handeling for navigation
  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    router.push(`/search?title=${searchValue}`);
  };

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="border hidden lg:block col-span-2 pl-7 pt-20 font-tomorrow">
        <SideBar />
      </div>
      <div className="font-tomorrow lg:col-span-6 col-span-10 flex flex-col items-center gap-14 mt-16 card-container">
        <div className="mt-8 flex align-center flex-col">
          <form className="pr-3 mb-3 text-2xl" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <ReviewList setLoading={setLoading} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
