"use client";
import React, { useEffect, useState } from "react";
import styles from "./reviewList.module.css";
import ReviewCard from "../reviewCard/reviewCard";

const getData = async (cat, title) => {
  const resp = await fetch(
    `http://localhost:3000/api/reviews?title=${title || ""}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};

const ReviewList = ({ cat, title }) => {
  const [reviews, setReviews] = useState([]);
  // TO BE USED IN A CLIENT COMPONENT useEffect IS USED
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(cat, title);
        setReviews(data.review); 
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [cat, title]);

  return (
    <>
      {reviews.map((item) => (
        <ReviewCard item={item} key={item.id} />
      ))}
    </>
  );
};

export default ReviewList;
