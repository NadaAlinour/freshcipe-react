import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';
import ReviewModal from '../../components/ReviewModal.jsx';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewedOrders, setReviewedOrders] = useState([]);
  const [reviewAttempted, setReviewAttempted] = useState(false);
  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/orders?populate[0]=order_items&populate[1]=order_items.product&filters[customer][id][$eq]=33', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => setOrders(response.data.data))
      .catch((error) => console.error('Error fetching user orders:', error));
  }, [userToken]);

  useEffect(() => {
    const storedReviewedOrders = JSON.parse(localStorage.getItem('reviewedOrders')) || [];
    setReviewedOrders(storedReviewedOrders);
  }, []);

  const handleShowItems = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseItems = () => {
    setSelectedOrder(null);
  };

  const handleShowReviewModal = (order) => {
    if (!reviewedOrders.includes(order.id)) {
      setSelectedOrder(order);
      setReviewAttempted(false);
      setShowReviewModal(true);
    } else {
      console.log('Review already submitted for this order.');
      setReviewAttempted(true);
      setSelectedOrder(order);
      setShowReviewModal(false);
    }
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
        `http://localhost:1337/api/ratings/reviews/vendor:${selectedOrder.vendorId}`,
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

      handleCloseReviewModal();
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

          <button className='showButton' onClick={() => handleShowReviewModal(order)}>Add Review</button>
          
          {reviewAttempted && selectedOrder && selectedOrder.id === order.id && (
            <p className="error-message">Review already submitted for this order.</p>
          )}

          {selectedOrder && selectedOrder.id === order.id && (
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
        </div>
      ))}

{showReviewModal && selectedOrder && (
  <ReviewModal
    onClose={handleCloseReviewModal}
    onSave={(score, comment) => handleSaveReview(score, comment)}
  />
)}
    </div>
  );
}

export default MyOrders;
