"use client";

import { React, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const resp = await fetch(url);

  const respData = await resp.json();

  if (!resp.ok) {
    const error = new Error(respData.message);

    throw error;
  }

  return respData;
};

const Comment = ({ reviewSlug, reviewMock, reviewData }) => {
  const { data: sessionData, status } = useSession();
  const [input, setInput] = useState("");
  // console.log(status)
  // THIS IS FOR MOCK DATA
  // const data = reviewMock;
  // const isLoading = false;
  // const error = false;

  // console.log(input);
  const {
    data: commentsData,
    error,
    isLoading,
  } = useSWR(
    `http://localhost:3000/api/comments?reviewSlug=${reviewSlug}`,
    fetcher
  );

  if (error) {
    console.log("Fetching failed");
  }

  if (isLoading) {
    console.log("Loading");
  } else if (commentsData) {
    console.log(commentsData.content);
  }

  // console.log(input);
  // console.log(reviewData)

  const onSubmitForm = async () => {

    // Covert reviewSlug without special characters
    const encodedString = reviewSlug;
    const decodedReviewSlug = decodeURIComponent(encodedString);

    try{
      // console.log('Clicked')
      const resp = await fetch("/api/comments", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          content: input,
          reviewSlug: decodedReviewSlug,
          userEmail: sessionData?.user?.email,
        }),
      });

      if (resp.ok) {
      console.log('Post Success')
      // Optionally, you can handle any additional logic here
    } else {
      // Handle error response
      console.log('Failed to create comment:', resp.statusText);
    }
  } catch (error) {
    // Handle fetch error
    console.error('Error creating comment:', error);
  }
    
  };

  

  // console.log("sessionData2:", sessionData);

  return (
    <div className="comment flex flex-col items-center w-full mb-14">
      <div>
        <h3>Comment section</h3>
      </div>
      <div className="border-4 relative flex flex-col items-center w-11/12 h-72">
        <textarea
          className="border-4 w-10/12 max-h-40 h-32 mt-10 p-3"
          placeholder="Type your comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={onSubmitForm}
          className="border-4 bg-black text-white lg-text-md font-bold p-3 absolute right-24 bottom-7"
        >
          Send comment
        </button>
      </div>
      {isLoading
        ? "loading"
        : commentsData?.map((item) => (
            <div
              className="border-4 relative flex flex-col w-11/12 min-h-40 max-h-full"
              key={item.id}
            >
              <div className="text-center flex p-3 gap-3">
                <div>
                  <Image
                    src="/logo/AdvicerLogo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <h1>{item.user.name}</h1>
                <span>3 hours ago</span>
              </div>
              <div className="p-3 flex-wrap">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Comment;
