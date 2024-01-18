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

// const ReviewList = ({ cat, title, setLoading, loading }) => {
//   const [reviews, setReviews] = useState([]);
//   // TO BE USED IN A CLIENT COMPONENT useEffect IS USED
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getData(cat, title);
//         setReviews(data.review); 
//         setLoading(false)
//       } catch (error) {
//         console.error(error.message);
//       }
//     };

//     fetchData();
//   }, [cat, title, setLoading]);

//   console.log('reviews', reviews)

//   return (
//     <>
//       {reviews.length > 0 ? (
//         reviews.map((item) => <ReviewCard item={item} key={item.id} />)
//       ) : loading ? (
//         <div>Loading</div>
//       ) : (
//         <div>
//           <h1 className="text-3xl">
//             Sorry, we could not find any reviews with this title
//           </h1>
//         </div>
//       )}
//     </>
//   );
// };

const ReviewList = ({ cat, title, setLoading, loading }) => {
  const [reviews, setReviews] = useState([]); // Data tracked in this state
  const [isLoaded, setIsLoaded] = useState(false); // New state to track if data is loaded

  useEffect(() => {
    setLoading(true); // Start loading
    setIsLoaded(false); // Reset loaded state
    const fetchData = async () => {
      try {
        const data = await getData(cat, title);
        setReviews(data.review);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false); // Stop loading
        setIsLoaded(true); // Set loaded state to true
      }
    };

    fetchData();
  }, [cat, title, setLoading]);

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
    return null // Render nothing if not loaded and not loading
  }
};

export default ReviewList;
