import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PrivacyPolicy.css';
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

function PrivacyPolicy() {
  return (
    <div>
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
    <div className="privacy-policy">
       
      <h1 className='privacy-header'>Privacy Policy</h1>

      <p className='policy-header'><strong>1. General:</strong></p>
      <p className='policy-body'>
        Reliance Retail Limited, with its registered office at 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai – 400 002, Maharashtra, India, is committed to protecting and respecting your privacy. This Privacy Policy outlines our privacy practices regarding the collection, use, disclosure, processing, transfer, storage, retention, and safeguarding of the information provided by you through the Website and/or pursuant to the purchase of the Products.
      </p>

      <p className='policy-header'><strong>2. Applicability of Policy:</strong></p>
      <p className='policy-body'>
        By accessing, using, browsing, or purchasing on JioMart and/or by submitting information, you agree to be bound by the terms of this Privacy Policy and consent to the collection, storage, possession, dealing, handling, sharing, disclosure, or transfer of your information in accordance with the terms of the Privacy Policy and agree to be governed by the laws of India, including data protection and privacy laws.
      </p>

      <p className='policy-header'><strong>3. Type of Information Collected:</strong></p>
      <p className='policy-body'>
        This Privacy Policy sets out the type of information collected, including sensitive personal data or information ("Sensitive Personal Data or Information"). We may collect your name, mailing address, phone number, email address, and contact preferences ("Personal Information"). Sensitive Personal Data or Information may include:
      </p>

      <p className='policy-header'><strong>4. Use of Information Collected:</strong></p>
      <p className='policy-body'>
        We collect and use information for various purposes, including creating and accessing your registered account, processing your Product requests, providing updates, and improving our Products. We may also use your information for marketing communications, resolving disputes, and detecting and protecting against fraud and illegal activity.
      </p>

      <p className='policy-header'><strong>5. Changes/Amendment/Modification to the Privacy Policy:</strong></p>
      <p className='policy-body'>
        This Privacy Policy is subject to changes based on business, legal, or regulatory requirements and will be updated on the Website. Your continued use of the App after any modification(s) to this Privacy Policy will be deemed as your acceptance of such modification(s).
      </p>
    </div>
    </div>
  );
}

export default PrivacyPolicy;
