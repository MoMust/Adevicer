'use client'

import React from 'react'
import Image from "next/image";
import useSWR from "swr";

const fetcher = async (url) => {
  const resp = await fetch(url);

  const data = await resp.json();

  if (!resp.ok) {
    const error = new Error(data.message);

    throw error;
  }

  return data;
};


const Comment = ({reviewSlug}) => {

    const { data, error, isLoading } = useSWR(
      `http://localhost:3000/api/comments?reviewSlug=${reviewSlug}`, fetcher
    );

    // const data = fetcher(
    //   `http://localhost:3000/api/comments?reviewSlug=1`
    // );

    // if(error){
    //     console.log('Fetching failed')
    // }
    
    if(isLoading){
        console.log('Loading')
    }else if(data){
        console.log(data.content)
    }

    // console.log('hello');

    

  return (
    <div className="comment flex flex-col items-center w-full mb-14">
      <div>
        <h3>Comment section</h3>
      </div>
      <div className="border-4 relative flex flex-col items-center w-11/12 h-72">
        <textarea
          className="border-4 w-10/12 max-h-40 h-32 mt-10 p-3"
          placeholder="Type your comment..."
        />
        <button className="border-4 bg-black text-white lg-text-md font-bold p-3 absolute right-24 bottom-7">
          Send comment
        </button>
      </div>
      {isLoading
        ? "loading"
        : data?.map((item) => (
            <div
              className="border-4 relative flex flex-col w-11/12 min-h-40 max-h-full"
              key={item.id}
            >
              <div className="text-center flex p-3 gap-3">
                <div>
                  <Image src="/logo/AdvicerLogo.png" width={40} height={40} />
                </div>
                <h1>{item.user.name}</h1>
                <span>3 hours ago</span>
              </div>
              <div className="p-3 flex-wrap">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
      
      {/* {data?.map((item) => (
        <div className="border-4 relative flex flex-col w-11/12 min-h-40 max-h-full" key={item.id}>
          <div className="text-center flex p-3 gap-3">
            <div>
              <Image src="/logo/AdvicerLogo.png" width={40} height={40} />
            </div>
            <h1>User name</h1>
            <span>3 hours ago</span>
          </div>
          <div className="p-3 flex-wrap">
            <p>{item.content}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Comment