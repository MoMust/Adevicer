import React from "react";
import ReviewList from "../components/reviewList/reviewList";

const Categories = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
      <div className="flex justify-center">
        <ReviewList cat={cat} />
      </div>
  );
};

export default Categories;
