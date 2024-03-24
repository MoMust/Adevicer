import React from "react";
import Image from "next/image";
import Link from "next/link";
const ReviewCard = ({ item }) => {
  // Format date
  const date = new Date(item.createdAt);

  const formattedDate = date.toISOString().split("T")[0]; // yyyy-mm-dd format
  const formattedTime = date.toTimeString().split(" ")[0].substring(0, 5);

  const formattedDateTime = formattedDate + " " + formattedTime;
  // console.log(item)
  return (
    <div className="border rounded-md w-4/6 card">
      <div className="pt-12">
        <Link href={`/reviews/${item.slug}`}>
          <h1 className="text-center lg:text-3xl">{item.gadget.name}</h1>
        </Link>
      </div>
      <Link href={`/reviews/${item.slug}`}>
        <div className=" bg-gray-100 flex mt-5 justify-center">
          <Image
            src={`${item.gadget.image}`}
            width={250}
            height={250}
            alt="lenovo"
          />
        </div>
      </Link>
      <div className="flex justify-center mt-5">
        <span>{formattedDateTime}</span>
      </div>
      <div className="flex justify-center">
        <div className="rounded flex flex-row gap-10 bg-gray-100 mt-4 p-3 pl-6 w-80 h-12">
          <div className="flex gap-2">
            <div>
              <Image
                src="/icons/heartGrey.png"
                width={20}
                height={20}
                alt="gray heart"
              />
            </div>
            <div className="text-center">
              <span className="">Like</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Image
                src="/icons/comment.png"
                width={20}
                height={20}
                alt="comment"
              />
            </div>
            <div className="text-center">
              <span>
                {item.comments.length} - {""}
              </span>
              <span>Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
