import React from 'react'
import styles from './reviewList.module.css'

const getData = async () => {
        const resp = await fetch('http://localhost:3000/api/reviews',  {
  cache: "no-store",
});

    if(!resp.ok){
        throw new Error('Failed')
    }

    return resp.json();
    }

const ReviewList = async () => {
    const {review} = await getData();

    // console.log(review)
  return (
    <div>
        
    </div>
  )
}

export default ReviewList