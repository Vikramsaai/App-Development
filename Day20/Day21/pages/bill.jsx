import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // Initialize state to manage user input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
  });

  // Function to fetch user data from the backend
  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/billing-details/1", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const userData = await response.json();
        setFormData(userData); // Update the form data with user details
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Define a function to handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a function to handle the checkout process
  const handleCheckout = () => {
    // Send the updated data to the backend
    fetch("http://localhost:8080/billing-details/1", {
      method: "PUT", // Use PUT to update the data
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
            alert("Billing details updated successfully");
            setTimeout(() => {
                navigate("/pay");
              }, 2000);
          // Successful response, you can handle it as needed
          console.log("Billing details updated successfully");
          navigate("/pay");
        } else {
          // Handle the error response
          console.error("Failed to update billing details");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-7 col-lg-8">
              {/* Display billing address form */}
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={handleCheckout}>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder=""
                          required
                          value={formData.firstName}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder=""
                          required
                          value={formData.lastName}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="1234 Main St"
                          required
                          value={formData.address}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          name="address2"
                          placeholder="Apartment or suite"
                          value={formData.address2}
                          onChange={handleFormChange}
                        />
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="India"
                          required
                          value={formData.country}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">Please provide a valid Country.</div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="Punjab"
                          required
                          value={formData.state}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">Please provide a valid state.</div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          name="zip"
                          placeholder=""
                          required
                          value={formData.zip}
                          onChange={handleFormChange}
                        />
                        <div className="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <button
                      className="w-100 btn btn-primary"
                      type="submit"
                      onClick={handleCheckout}
                    >
                      Update address
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
