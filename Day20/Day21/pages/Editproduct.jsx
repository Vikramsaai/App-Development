import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../components";
import { useParams } from "react-router-dom";

const EditProductForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: 0,
    description: "",
    image: "",
    categoryname: "",
    rate: 0,
    count: 0,
  });
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // Fetch product details based on the 'id' when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Set the product state with the retrieved data
          setProduct(data);
        } else {
          console.error("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error occurred while fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setAlert(true); // Set the alert to true on success
        setTimeout(() => {
          setAlert(false); // Hide the alert after a certain time (e.g., 3 seconds)
        }, 3000); // 3000 milliseconds (3 seconds)

        // Optionally, you can redirect the user or perform other actions after a successful update.
      } else {
        console.error("Failed to update the product.");
      }
    } catch (error) {
      console.error("Error occurred while updating the product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Edit Product</h1>
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
              {alert && (
                <div className="alert alert-success" role="alert">
                  Product updated successfully!
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProductForm;
