
import React from 'react'
import ReviewList from '../components/reviewList/reviewList';

const Search = async ({ searchParams }) => {

  const {title}  = searchParams;

  return (
    <div>
      <ReviewList title={title} />
    </div>
  );
};

export default Search