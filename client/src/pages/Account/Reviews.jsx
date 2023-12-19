import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';

function Reviews({ orderId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview] = useState([]);
  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!orderId) {
          console.error('Order ID is undefined. Cannot fetch reviews.');
          return;
        }

        const response = await axios.get(`http://localhost:1337/api/ratings/reviews/orders:${orderId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        console.log('API Response:', response.data);

        const { reviewsCount, averageScore, userReview = {}, reviews } = response.data;

        console.log('Reviews Count:', reviewsCount);
        console.log('Average Score:', averageScore);
        console.log('User Review:', userReview);
        console.log('All Reviews:', reviews);
        setUserReview(userReview);

        setReviews(reviews);
        setLoading(false);

        console.log('Reviews before rendering:', reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    if (orderId) {
      fetchReviews();
    } else {
      setLoading(false);
    }
  }, [orderId, userToken]);

  console.log('Reviews before rendering:', reviews);

  return (
    <div className="reviews-container">
      <h1>Your Reviews</h1>
      {userReview && (
        <div className="review-box">
          <p>Order ID: {userReview.id}</p>
          <p>Score: {userReview.score}</p>
          <p>Comment: {userReview.comment}</p>
        </div>
      )}
    </div>
  );
}

export default Reviews;
