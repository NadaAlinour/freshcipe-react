import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview]= useState([]);
  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!userToken) {
          console.error('User token is undefined. Cannot fetch reviews.');
          return;
        }

        const tokenParts = userToken.split('.');
        if (tokenParts.length !== 3) {
          console.error('Invalid token format.');
          return;
        }

        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload.id;

        //change the no. in the below url to get other reviews
        const response = await axios.get(`http://localhost:1337/api/ratings/reviews/vendor:12`, {
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

    if (userToken) {
      fetchReviews();
    } else {
      setLoading(false);
    }
  }, [userToken]);

  /*if (loading) {
    return <p>Loading reviews...</p>;
  }*/
  console.log('Reviews before rendering:', reviews);

  return (
    <div className="reviews-container">
      <h1>User Reviews</h1>
      {userReview && (
        <div className="review-box">
          <h2>Your Review</h2>
          <p>Order ID: {userReview.id}</p>
          <p>Score: {userReview.score}</p>
          <p>Comment: {userReview.comment}</p>
        </div>
      )}
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-box">
            <h2>Order ID: {review.id}</h2>
            <p>Score: {review.score}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
  
}

export default Reviews;
