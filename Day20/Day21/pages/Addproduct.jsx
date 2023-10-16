import React, { useState } from "react";
import { Navbar, Footer } from "../components";

const ProductForm = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    categoryname: "",
    rate: "",
    count: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        headers: {
          'Authorization':`Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          categoryname: product.categoryname,
          rating: {
            rate: product.rate,
            count: product.count,
          },
        }),
      });

      if (response.ok) {
        console.log("Product submitted successfully!");
        // Optionally, you can redirect the user to a success page or perform other actions here.
      } else {
        
        console.error("Failed to submit product.");
      }
    } catch (error) {
      console.error("Error occurred while submitting product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Add Product</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="id" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={product.id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={product.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="image" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={product.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="categoryname" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryname"
                  name="categoryname"
                  value={product.categoryname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="rate" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rate"
                  name="rate"
                  value={product.rate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="count" className="form-label">
                  Count
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="count"
                  name="count"
                  value={product.count}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductForm;
