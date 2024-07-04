import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Managewebsite.css';

const ManageWebsite = () => {
  const [websiteName, setWebsiteName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Implement save functionality here
    console.log('Website Name:', websiteName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email Address:', emailAddress);
    alert('Website settings saved successfully!');
  };

  return (
    <div className="manage-website">
      <Navbar />
      <div className="manage-website-content">
        <h2>Manage Website</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="websiteName">Website Name:</label>
            <input
              type="text"
              id="websiteName"
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="save-btn">Save</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ManageWebsite;
