import React from 'react'
import SideBar from '@/app/components/sideBar/sideBar';
import ReviewCard from '@/app/components/reviewCard/reviewCard';
import Image from 'next/image';
import Rating from '@/app/components/rating/rating';
import Comment from '@/app/components/comment/comment';
// import ReviewMockList from "../../api/mock/reviewDb"; //Imported mock data
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
  // const data = ReviewMockList;
  const data = await getData(slug);

  // console.log('slug', slug)
  // console.log('data', data)
  return (
    <div className=" grid grid-cols-10 min-h-screen">
      <div className="border hidden lg:block col-span-2 pl-7 pt-20 font-tomorrow">
        <SideBar />
      </div>
      <div className="font-tomorrow lg:col-span-6 col-span-10 flex flex-col items-center border gap-20 mb-14">
        <div className="flex flex-col justify-center items-center gap-10 w-1/2">
          <div className="title mt-10 mb-10">
            <h1 className="lg:text-3xl">{data?.title}</h1>
          </div>
          <div className="image w-full h-80 relative">
            <Image src={data?.gadget?.image} alt="Laptop" fill objectFit='contain' />
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
        <Comment reviewSlug={slug} reviewMock={data} reviewData={data} />
      </div>
    </div>
  );
}

export default SinglePage