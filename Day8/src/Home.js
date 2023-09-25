import React from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Include the Navbar component */}
      
      <div className="header">
        <h1>Welcome to Our Grocery Shop</h1>
      <div className="before">
        <div className='last'>
        <p>Discover a wide range of fresh and delicious products.</p></div>
      </div>
        {/* Add the image without importing */}
        {/* Add product cards here */}
      </div>
    </div>
  );
}

export default Home;
