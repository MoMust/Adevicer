"use client";
import { React, useState } from "react";
import "./rating.css";

const updateRating = async (rating, slug) => {
  const resp = await fetch("/api/rating", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rating),
  });
};

const Rating = ({ slug, currentRating }) => {
  const [rating, setRating] = useState(currentRating);
  const [hover, setHover] = useState(0);

  const onSubmitRating = async (index) => {
    try {
      setRating(index);
      await updateRating({
        rating: index,
        slug: slug,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => onSubmitRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
