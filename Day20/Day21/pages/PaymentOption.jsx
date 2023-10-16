import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Footer } from '../components';

const PaymentOptions = () => {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h1 className="mb-4">Select a Payment Method</h1>
      <div className="list-group">
        <Link to="/payment/card" className="list-group-item list-group-item-action">
          <div className="d-flex justify-content-between align-items-center">
            <span>Credit/Debit Card</span>
            <i className="fas fa-credit-card"></i>
          </div>
        </Link>
        <Link to="/payment/paypal" className="list-group-item list-group-item-action">
          <div className="d-flex justify-content-between align-items-center">
            <span>PayPal</span>
            <i className="fab fa-paypal"></i>
          </div>
        </Link>
        <Link to="/payment/cod" className="list-group-item list-group-item-action">
          <div className="d-flex justify-content-between align-items-center">
            <span>Cash on Delivery</span>
            <i className="fas fa-wallet"></i>
          </div>
        </Link>
      </div>
    </div>
   
    </>
  );
};

export default PaymentOptions;
