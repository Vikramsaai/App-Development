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
import { faInstagram,faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import img1 from '../images/feature-img-1.png';
import img2 from '../images/feature-img-2.png';
import img3 from '../images/feature-img-3.png';
import img4 from '../images/product-1.png';
import img5 from '../images/product-2.png';
import img6 from '../images/product-3.png';
import img7 from '../images/product-4.png';
import img8 from '../images/product-5.png';
import img9 from '../images/product-6.png';
import img10 from '../images/cat-1.png';
import img11 from '../images/cat-2.png';
import img12 from '../images/cat-3.png';
import img13 from '../images/cat-4.png';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Home() {
  return (
    <div className="App">
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
      <div className="banner">
        <h1><a style={{ color: 'orange' }}>Fresh</a> And <a style={{ color: 'orange' }}>Organic</a> Products</h1>
        <p>Your one-stop shop for fresh and organic groceries.</p>
      </div>

        <h2 className="features-heading" style={{ fontSize: '35px' }}>Our <a style={{ color: 'orange' }}>Features</a></h2>
      <div className="features">
        <div className="feature-box">
          <img src={img1}></img>
          <h2>Fresh And Organic</h2>
          <p>Discover the freshest & Organic product</p>
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
        <h2 className="features-heading" style={{ fontSize: '35px' }}>Our <a style={{ color: 'orange' }}>Products</a></h2>
      <div className="features">
        <div className="feature-box">
          <img className='img' src={img4}></img>
          <h2>Fresh Orange</h2>
          <p>$4.99/--10.99/-</p>
        </div>
        <div className="feature-box">
        <img className='img' src={img5}></img>
          <h2>Fresh Onion</h2>
          <p>$4.99/--10.99/-</p>
        </div>
        <div className="feature-box">
        <img className='img' src={img6}></img>
          <h2>Fresh Meat</h2>
          <p>$4.99/--10.99/-</p>
        </div>
      </div>
      <div className="features">
        <div className="feature-box">
          <img className='img' src={img7}></img>
          <h2>Fresh Cabage</h2>
          <p>$4.99/--10.99/-</p>
        </div>
        <div className="feature-box">
        <img className='img' src={img8}></img>
          <h2>Fresh Potato</h2>
          <p>$4.99/--10.99/-</p>
        </div>
        <div className="feature-box">
        <img className='img' src={img9}></img>
          <h2>Fresh Avocado</h2>
          <p>$4.99/--10.99/-</p>
        </div>
      </div>
      <h2 className="features-heading" style={{ fontSize: '35px' }} >Products <a style={{ color: 'orange' }}>Categories</a></h2>

      <div className="product-categories">
        <div className="category-box">
        <img className='img1' src={img10}></img>
          <h2>Vegetables</h2>
          <p>Fresh and healthy vegetables for your family.</p>
        </div>
        <div className="category-box">
        <img className='img1' src={img11}></img>
          <h2>Fresh Fruits</h2>
          <p>Delicious and nutritious fresh fruits.</p>
        </div>
        <div className="category-box">
        <img className='img1' src={img12}></img>
          <h2>Dairy Products</h2>
          <p>Quality dairy products for your kitchen.</p>
        </div>
        <div className="category-box">
        <img className='img1' src={img13}></img>
          <h2>Fresh Meat</h2>
          <p>Tender and juicy meat cuts for your meals.</p>
        </div>
      </div>

      <footer className="footer">
        <div className='outer'>
          <div className='inner'>
          <span className="logo">
            FreshMart
            <FontAwesomeIcon icon={faShoppingBasket} />
            
          </span>
          <div className='ico'>
          <FontAwesomeIcon icon={faInstagram} className='fo'/>
            <FontAwesomeIcon icon={faTwitter} className='fo'/>
            <FontAwesomeIcon icon={faFacebook} className='fo'/> 
            </div> 
            <p><Link to="/login" className="link1">Admin</Link></p>  
          </div>
          <div className='inner'><h2>Contact Info</h2>
          <p>+123 456 7890.</p>
          <p>+111 222 3333.</p>
          <p>name@email.com</p>
          <p>Coimbatore.</p>
          </div>
          <div className='inner'>
          <p><Link to="/terms" className="link1">Terms and Condition</Link></p>
          <p><Link to="/privacy" className="link1">Privacy Policy</Link></p>
          <p><Link to="/faq" className="link1">FAQ</Link></p>
          </div>
          <div className='inner'>
            <h2>Let's Chat!</h2>
            <p>freshmart@gmail.com</p>
            <p>+123 456 7890.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;



