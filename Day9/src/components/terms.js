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

function TermsAndConditions() {
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
            <div className="terms-and-conditions">
                <h1 className="terms-header">Terms and Conditions</h1>

                <p className="terms-header">
                    <strong>1. General:</strong>
                </p>
                <p className="terms-body">
                    Welcome to FreshMart. These terms and conditions ("Terms") govern your access to and use of our services. By using our services, you agree to these Terms.
                </p>

                <p className="terms-header">
                    <strong>2. Applicability of Terms:</strong>
                </p>
                <p className="terms-body">
                    These Terms apply to all visitors, users, and others who access or use our services. If you disagree with any part of these Terms, you may not use our services.
                </p>

                <p className="terms-header">
                    <strong>3. Use of Our Services:</strong>
                </p>
                <p className="terms-body">
                    Your use of our services is subject to compliance with these Terms. We may collect and use information as described in our Privacy Policy.
                </p>

                <p className="terms-header">
                    <strong>4. Changes to Terms:</strong>
                </p>
                <p className="terms-body">
                    We reserve the right to make changes or modifications to these Terms at any time. Continued use of our services after any such changes shall constitute your consent to the modified terms.
                </p>

                <p className="terms-header">
                    <strong>5. User Conduct:</strong>
                </p>
                <p className="terms-body">
                    You agree to use our services only for lawful purposes and in a way that does not infringe the rights of any third party or restrict or inhibit their use and enjoyment of our services.
                </p>

                <p className="terms-header">
                    <strong>6. Account Information:</strong>
                </p>
                <p className="terms-body">
                    You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
                </p>

                <p className="terms-header">
                    <strong>7. Intellectual Property:</strong>
                </p>
                <p className="terms-body">
                    All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of FreshMart or its content suppliers and protected by international copyright laws.
                </p>

                <p className="terms-header">
                    <strong>8. Termination:</strong>
                </p>
                <p className="terms-body">
                    We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>

                <p className="terms-header">
                    <strong>9. Governing Law:</strong>
                </p>
                <p className="terms-body">
                    These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
                </p>
            </div>
        </div>
    );
}

export default TermsAndConditions;
