import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';  // Import useNavigate
import { useSelector } from 'react-redux';

const Navbar = () => {
    // Check if the user is authenticated (e.g., by checking the presence of a token in local storage)
    const isAuthenticated = !!localStorage.getItem("token");
    const state = useSelector((state) => state.handleCart);

    // Use useNavigate to get the navigation function
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        navigate("/login");
        localStorage.removeItem("token");

        // Navigate to the login page or another desired page
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                    Grocery Application
                </NavLink>
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {isAuthenticated ? (
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                ):(<>
                <p className="navbar-nav m-auto my-2 text-center">Welcome to Grocery Application</p>
                </>)}
                    <div className="buttons text-center">
                        {isAuthenticated ? (
                            // User is authenticated, show "Logout" button
                            <button className="btn btn-outline-dark m-2" onClick={handleLogout}>
                                <i className="fa fa-sign-out-alt mr-1"></i> Logout
                            </button>
                        ) : (
                            // User is not authenticated, show "Login" and "Register" buttons
                            <>
                                <NavLink to="/login" className="btn btn-outline-dark m-2">
                                    <i className="fa fa-sign-in-alt mr-1"></i> Login
                                </NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark m-2">
                                    <i className="fa fa-user-plus mr-1"></i> Register
                                </NavLink>
                            </>
                        )}
                         {isAuthenticated ? (
                        <NavLink to="/cart" className="btn btn-outline-dark m-2">
                            <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}){" "}
                        </NavLink>
                         ):(<></>)}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
