import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const postData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send the data to the backend
    fetch("http://localhost:8080/feedback/postfeed", {
      method: "POST",
      headers: {
        'Authorization':`Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Form submitted successfully, show an alert
          setIsSubmitted(true);

          setTimeout(() => {
            setIsSubmitted(false); // Hide the alert after a certain time (e.g., 3 seconds)
          }, 3000);

          // Reset the form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          // Handle the error response
          console.error("Failed to submit feedback");
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
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled={!formData.name || !formData.email || !formData.message}
                >
                  Send
                </button>
              </div>
            </form>
            {isSubmitted && (
              <div className="alert alert-success mt-3">
                Form submitted successfully!
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
