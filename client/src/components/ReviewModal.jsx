import React, { useState } from 'react';

function ReviewModal({ onClose, onSave, reviews, userReview }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSaveReview = () => {
    onSave(rating, comment);
  };

  return (
    <div className="review-modal">
      {userReview ? (

        <div>
          <h2>Your Review</h2>
          <p>Score: {userReview.score}</p>
          <p>Comment: {userReview.comment}</p>
          <p>Author: {userReview.author.username}</p>
        </div>
      ) : (

        <div>
          <h2>Add Review</h2>
          <label>Rating:</label>
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />

          <label>Comment:</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

          <button onClick={handleSaveReview}>Save Review</button>
        </div>
      )}
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default ReviewModal;
