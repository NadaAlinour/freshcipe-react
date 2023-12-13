import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../../assets/stylesheets/account.css';
import { IconMenu2, IconX } from '@tabler/icons-react';

function PersonalDetails() {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    axios.get('http://localhost:1337/api/users/33', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => setUserData(response.data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    axios.put('http://localhost:1337/api/users/33', userData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => console.log('User data updated:', response.data))
      .catch((error) => console.error('Error updating user data:', error));
  };

  /*const handleDeleteAccount = () => {
    axios.delete('', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        console.log('User account deleted:', response.data);
        //redirect to the login page or perform other actions after account deletion
      })
      .catch((error) => console.error('Error deleting user account:', error));
  };*/

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
        {/*<button className='buttonPersonal' onClick={handleDeleteAccount}>Delete Account</button>*/}
      </div>
    </div>
  );
}

export default PersonalDetails;
