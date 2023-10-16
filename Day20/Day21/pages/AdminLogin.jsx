import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        const name = data.name;
        const role = data.role;

        // Store the token in localStorage or a state management system as needed
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);

        if (role === "ADMIN") {
          // Redirect to the home page
          navigate("/admin");
        } else {
          // Show an error message for roles other than USER
          setErrorMessage("Access Denied: You are not authorized to log in.");
        }
        setLoginSuccess(true);
      } else {
        // Login failed, handle errors here
        console.error("Login failed");
        setErrorMessage("Invalid username/email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Invalid username/email or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={false}
                >
                  {loginSuccess ? (
                    "Login"
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
