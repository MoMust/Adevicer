import React from 'react'
import styles from './reviewList.module.css'
import ReviewCard from '../reviewCard/reviewCard';

const getData = async (cat) => {
        const resp = await fetch(
          `http://localhost:3000/api/reviews?cat=${cat || ""}`,
          {
            cache: "no-store",
          }
        );

    if(!resp.ok){
        throw new Error('Failed')
    }

    return resp.json();
    }

const ReviewList = async ({cat}) => {
  
    const {review} = await getData(cat);

  return (
    <>
      {review.map((item) => (
        <ReviewCard item={item} key={item.id} />
      ))}
    </>
  );
}

export default ReviewList