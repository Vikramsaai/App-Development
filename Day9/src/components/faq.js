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

function FAQ() {
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
                        <FontAwesomeIcon className="ic" icon={faSearch} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="ic" icon={faShoppingCart} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="ic" icon={faUser} />
                    </a>
                </div>
            </nav>
            <div className="faq">
                <h1 className="faq-header">Frequently Asked Questions</h1>

                <div className="faq-question">
                    <h3>Q: How do I place an order?</h3>
                    <p>
                        To place an order, follow these steps:
                        <ol>
                            <li>Log in to your account or sign up for a new account.</li>
                            <li>Browse our products and add the items you want to your cart.</li>
                            <li>Review your cart and proceed to checkout.</li>
                            <li>Provide your shipping address and payment information.</li>
                            <li>Review and confirm your order.</li>
                        </ol>
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Q: How can I track my order?</h3>
                    <p>
                        Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status and delivery date of your order.
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Q: What payment methods do you accept?</h3>
                    <p>
                        We accept various payment methods, including credit cards, debit cards, and online payment gateways. You can choose the payment method that is most convenient for you during checkout.
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Q: Is there a minimum order amount?</h3>
                    <p>
                        Yes, we have a minimum order amount of $20 for all orders. This helps us cover the cost of processing and delivery.
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Q: How long does delivery take?</h3>
                    <p>
                        Delivery times may vary depending on your location. Typically, orders are delivered within 2-5 business days. You can track your order using the provided tracking number.
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Q: Can I return or exchange products?</h3>
                    <p>
                        Yes, we have a return and exchange policy. If you are not satisfied with your purchase, you can return or exchange the product within 14 days of delivery. Please review our <a href="#">Return Policy</a> for more details.
                    </p>
                </div>

                {/* Add more FAQ questions and answers as needed. */}
            </div>
        </div>
    );
}

export default FAQ;
