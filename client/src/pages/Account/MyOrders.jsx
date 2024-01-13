import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';
import ReviewModal from '../../components/ReviewModal.jsx';
import Reviews from './Reviews.jsx';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderedItems, setShowOrderedItems] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewedOrders, setReviewedOrders] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState(null);
  const { userToken, userId } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userId) {
      console.error('User ID is undefined.');
      return;
    }

    axios
      .get(`http://localhost:1337/api/orders?populate[0]=order_items&populate[1]=order_items.product&filters[customer][id][$eq]=${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => setOrders(response.data.data))
      .catch((error) => console.error('Error fetching user orders:', error));
  }, [userId, userToken]);

  useEffect(() => {
    const storedReviewedOrders = JSON.parse(localStorage.getItem('reviewedOrders')) || [];
    setReviewedOrders(storedReviewedOrders);
  }, []);

  const handleShowItems = (order) => {
    setSelectedOrder(order);
    setShowOrderedItems(true);
  };

  const handleCloseItems = () => {
    setShowOrderedItems(false);
    setSelectedOrder(null);
  };

  const handleShowReviewModal = async (order) => {
    setSelectedOrder(order);

    try {
      console.log('Fetching reviews for order:', order.id);
      const response = await axios.get(`http://localhost:1337/api/ratings/reviews/orders:${order.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      const { userReview, reviews } = response.data;

      console.log('Fetched reviews successfully:', { userReview, reviews });

      setUserReview(userReview);
      setReviews(reviews);

      console.log('API Response:', response);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }

    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const handleSaveReview = async (score, comment) => {
    console.log('Review data:', { score, comment });
    if (!selectedOrder || !selectedOrder.id) {
      console.error('Selected order is null or does not have an id.');
      return;
    }

    try {
      await axios.post(
        `http://localhost:1337/api/ratings/reviews/orders:${selectedOrder.id}`,
        {
          score: Number(score),
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log('Review saved.');

      setReviewedOrders([...reviewedOrders, selectedOrder.id]);
      localStorage.setItem('reviewedOrders', JSON.stringify([...reviewedOrders, selectedOrder.id]));

      handleCloseItems();
    } catch (error) {
      console.error('Error saving review:', error);
    }
  };

  return (
    <div className="my-orders-container">
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h2>Order ID: {order.id}</h2>
          <h3>Delivery Window</h3>
          <p>{order.attributes.desiredFrom} - {order.attributes.desiredTo}</p>
          <h3>Grand Total:</h3>
          <p>{order.attributes.grandTotal}</p>

          <button className='showButton' onClick={() => handleShowItems(order)}>Show Ordered Items</button>

          {selectedOrder && selectedOrder.id === order.id && showOrderedItems && (
            <div className="ordered-items-window">
              <h2>Ordered Items for Order ID: {selectedOrder.id}</h2>
              <ul>
                {selectedOrder.attributes.order_items.data.map((item) => (
                  <li key={item.id}>
                    {item.attributes.quantity} x {item.attributes.product.data.attributes.title}
                  </li>
                ))}
              </ul>
              <button className='showButton' onClick={handleCloseItems}>Close</button>
            </div>
          )}

          <button className='showButton' onClick={() => handleShowReviewModal(order)}>
            {reviewedOrders.includes(order.id) ? 'Show Review' : 'Add Review'}
          </button>

          {showReviewModal && selectedOrder && selectedOrder.id === order.id && (
            <ReviewModal
              onClose={handleCloseReviewModal}
              onSave={(score, comment) => handleSaveReview(score, comment)}
              userReview={userReview}
            >
              <Reviews orderId={selectedOrder.id} reviews={reviews} setReviews={setReviews} />
            </ReviewModal>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
