import React from 'react'
import SideBar from '@/app/components/sideBar/sideBar';
import ReviewCard from '@/app/components/reviewCard/reviewCard';
import Image from 'next/image';
import Rating from '@/app/components/rating/rating';

const getData = async (slug) => {
  const resp = await fetch(`http://localhost:3000/api/reviews/${slug}`, {
    cache: "no-store",
  });

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};


const SinglePage = async ({params}) => {

  const {slug} = params;
  const data = await getData(slug);
  console.log(data);
  return (
    <div className=" grid grid-cols-10 min-h-screen">
      <div className="border hidden lg:block col-span-2 pl-7 pt-20 font-tomorrow">
        <SideBar />
      </div>
      <div className="font-tomorrow lg:col-span-6 col-span-10 flex flex-col items-center border">
        <div className="flex flex-col justify-center items-center gap-10 w-1/2">
          <div className="title mt-10 mb-10">
            <h1 className="lg:text-3xl">Lenovo</h1>
          </div>
          <div className="image w-full h-80 relative">
            <Image src="/images/lenovo.png" layout="fill" objectFit="contain" />
          </div>
          <div className="flex items-center gap-4">
            <div className="label">
              <p className="text-lg">Rating</p>
            </div>
            <div>
              <Rating />
            </div>
          </div>
        </div>
        <div className="comment w-full">
          <div>
            <h3>Comment section</h3>
          </div>
          <div className="border relative flex flex-col items-center w-11/12 h-72">
            <textarea className="border  w-10/12 max-h-48 h-32  mt-10" />
            <button className="border bg-black text-white lg-text-md font-bold p-3 absolute right-24 bottom-7">
              Send comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage