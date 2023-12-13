import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';

function Reviews({ orderId }) {
  const [reviews, setReviews] = useState([]);
  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {

    axios.get(`http://localhost:1337/api/ratings/reviews/order:${orderId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
    })
      .then((response) => setReviews(response.data.reviews))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, [orderId, userToken]);

  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      {reviews.map((review) => (
        <div key={review.userReview.id} className="review-box">
          <h2>Order ID: {review.userReview.id}</h2>
          <p>Score: {review.userReview.score}</p>
          <p>Comment: {review.userReview.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
