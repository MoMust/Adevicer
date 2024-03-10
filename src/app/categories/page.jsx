import React from "react";
import ReviewList from "../components/reviewList/reviewList";
import SideBar from "../components/sideBar/sideBar";

const Categories = ({ searchParams }) => {
  // const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="border hidden lg:block col-span-2 pl-7 pt-20 font-tomorrow">
        <SideBar />
      </div>
      <div className="font-tomorrow lg:col-span-6 col-span-10 flex flex-col items-center mt-16 card-container">
        <div>
          <h1 className="text-2xl mb-20">{cat}</h1>
        </div>
        <ReviewList cat={cat} />
      </div>
    </div>
  );
};

export default Categories;
