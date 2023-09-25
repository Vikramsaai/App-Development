import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faListAlt,
  faShoppingBasket,
  faStar,
  faBlog,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './home.css';
import img1 from '../images/feature-img-1.jpg';
import img2 from '../images/feature-img-2.jpg';
import img3 from '../images/feature-img-3.jpg';

function Home() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="logo">
            <FontAwesomeIcon icon={faShoppingBasket} />
            FreshMart
          </span>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* Right-side icons */}
        <div className="navbar-icons">
          <a href="#">
            <FontAwesomeIcon className='ic' icon={faSearch} />
          </a>
          <a href="#">
            <FontAwesomeIcon className='ic' icon={faShoppingCart} />
          </a>
          <a href="#">
            <FontAwesomeIcon className='ic' icon={faUser} />
          </a>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner">
        {/* Add your banner content here */}
        <h1><a style={{ color: 'orange' }}>Fresh</a> And <a style={{ color: 'orange' }}>Organic</a> Products</h1>
        <p>Your one-stop shop for fresh and organic groceries.</p>
      </div>

      {/* Features */}
        <h2 className="features-heading">Our <a style={{ color: 'orange' }}>Features</a></h2>
      <div className="features">
        {/* Three div boxes for Features */}
        <div className="feature-box">
          <img src={img1}></img>
          <h2>Fresh And Organic</h2>
          <p>Discover the freshest and most organic produce.</p>
        </div>
        <div className="feature-box">
        <img src={img2}></img>
          <h2>Free Delivery</h2>
          <p>Enjoy free and reliable delivery services.</p>
        </div>
        <div className="feature-box">
        <img src={img3}></img>
          <h2>Easy Payment</h2>
          <p>Convenient and secure payment options.</p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="product-categories">
        {/* Three div boxes for Product Categories */}
        <div className="category-box">
          <h2>Vegetables</h2>
          <p>Fresh and healthy vegetables for your family.</p>
        </div>
        <div className="category-box">
          <h2>Fresh Fruits</h2>
          <p>Delicious and nutritious fresh fruits.</p>
        </div>
        <div className="category-box">
          <h2>Dairy Products</h2>
          <p>Quality dairy products for your kitchen.</p>
        </div>
        <div className="category-box">
          <h2>Fresh Meat</h2>
          <p>Tender and juicy meat cuts for your meals.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        {/* Add your footer content here */}
        <p>&copy; 2023 FreshMart. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;