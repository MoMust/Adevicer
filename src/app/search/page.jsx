
import React from 'react'
import ReviewList from '../components/reviewList/reviewList';
import SideBar from '../components/sideBar/sideBar';

const Search = async ({ searchParams }) => {

  const {title}  = searchParams;

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="border hidden lg:block col-span-2 pl-7 pt-20 font-tomorrow">
        <SideBar />
      </div>
      <div className="font-tomorrow lg:col-span-6 col-span-10 flex flex-col items-center  justify-center card-container">

      <ReviewList title={title} />
      </div>
    </div>
  );
};

export default Search