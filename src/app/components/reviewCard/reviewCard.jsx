import React from 'react'
import Image from 'next/image';
const ReviewCard = () => {
  return (
      <div className="border rounded-md w-4/6 card">
        <div className="pt-12">
          <h1 className="text-center lg:text-3xl">Title</h1>
        </div>
        <div className=" bg-gray-100 flex mt-5 justify-center">
          <Image src="/images/lenovo.png" width={250} height={250} alt='lenovo'/>
        </div>
        <div className="flex justify-center mt-5">
          <span>27-12-2023</span>
        </div>
        <div className="flex justify-center">
          <div className="rounded flex flex-row gap-10 bg-gray-100 mt-4 p-3 pl-6 w-80 h-12">
            <div className="flex gap-2">
              <div>
                <Image src="/icons/heartGrey.png" width={20} height={20} alt='gray heart'/>
              </div>
              <div className="text-center">
                <span className="">Like</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Image src="/icons/comment.png" width={20} height={20} alt='comment'/>
              </div>
              <div className="text-center">
                <span>23 </span>
                <span>Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ReviewCard