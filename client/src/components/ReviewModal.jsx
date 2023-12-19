import React, { useState } from 'react';

function ReviewModal({ onClose, onSave, reviews }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSaveReview = () => {
    onSave(rating, comment);
  };

  return (
    <div className="review-modal">
      <h2>Add Review</h2>
      <label>Rating:</label>
      <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />

      <label>Comment:</label>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

      <button onClick={handleSaveReview}>Save Review</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default ReviewModal;
