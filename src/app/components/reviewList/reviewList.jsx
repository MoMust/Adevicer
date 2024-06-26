"use client";
import React, { useEffect, useState } from "react";
import styles from "./reviewList.module.css";
import ReviewCard from "../reviewCard/reviewCard";
// import ReviewMockList from "../../api/mock/reviewDb"; //Imported mock data

const getData = async (cat, convertedInput, searchSlug) => {
  const resp = await fetch(
    `http://localhost:3000/api/reviews?title=${
      convertedInput || ""
    }&cat=${cat || ""}&searchSlug=${convertedInput || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};

const ReviewList = ({
  cat,
  convertedInput,
  searchSlug,
  setLoading,
  loading,
  ReviewMockList,
}) => {
  // const [reviews, setReviews] = useState(ReviewMockList); // THIS IS MOCK DATA
  const [reviews, setReviews] = useState([]); // Data tracked in this state
  const [isLoaded, setIsLoaded] = useState(false); // State to track if data is loaded

  // Comment out UseEffect while using mock data
  useEffect(() => {
    if (setLoading) {
      setLoading(true); // Start loading
    }

    setIsLoaded(false); // Reset loaded state
    const fetchData = async () => {
      try {
        const data = await getData(cat, convertedInput, searchSlug);
        setReviews(data.review);
        
        // console.log('reviewData',data)

      } catch (error) {
        console.error(error.message);
      } finally {
        if (setLoading) {
          setLoading(false); // Stop loading
        }

        setIsLoaded(true); // Set loaded state to true
      }
    };

    fetchData();
  }, [cat, convertedInput, searchSlug, setLoading]);

  // Conditional rendering based on the reviews, loading, and isLoaded states
  if (loading) {
    return <div>Loading...</div>;
  } else if (reviews.length > 0) {
    return (
      <>
        {reviews.map((item) => (
          <ReviewCard item={item} key={item.id} />
        ))}
      </>
    );
  } else if (isLoaded) {
    return <div>Sorry, we could not find any reviews with this title</div>;
  } else {
    return null; // Render nothing if not loaded and not loading
  }
};

export default ReviewList;
