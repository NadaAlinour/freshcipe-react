import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';

function PersonalDetails() {
  const dispatch = useDispatch();
  const { userToken, userId } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  useEffect(() => {
    if (!userId) {
      console.error('User ID is undefined.');
      return;
    }

    axios.get(`http://localhost:1337/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => setUserData(response.data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userId, userToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:1337/api/users/${userId}`, userData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        console.log('User data updated:', response.data);
        setShowConfirmationPopup(true);
      })
      .catch((error) => console.error('Error updating user data:', error));
  };

  const closeConfirmationPopup = () => {
    setShowConfirmationPopup(false);
  };

  return (
    <div>
      <div className="main-content">
        <form onSubmit={handleSave}>
          <div className="personaldetails">
            <div className="profile">
              <h1>Personal Details</h1>
              <h2>Full Name</h2>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className='inputPersonal'
              />
              <h2>Email</h2>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className='inputPersonal'
              />
              <button className='buttonPersonal' type="submit">Save</button>
            </div>
          </div>
        </form>
        {showConfirmationPopup && (
          <div className="confirmation-popup">
            <p>Changes saved successfully!</p>
            <button onClick={closeConfirmationPopup}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalDetails;
