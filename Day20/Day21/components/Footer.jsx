import React from "react";
import { Link } from "react-router-dom"; // You can use react-router-dom for navigation

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/security" className="text-light" style={{textDecoration:"none"}}>
                  Security & Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-light" style={{textDecoration:"none"}}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-light" style={{textDecoration:"none"}}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Grocery Street</p>
            <p>City, State 12345</p>
            <p>Email: info@example.com</p>
          </div>

          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" className="text-light me-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-light">
              <i className="fab fa-instagram"></i>
            </a>
            <h6><Link to="/adminlogin" style={{textDecoration:"none", color:"white"}}>Admin</Link></h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
