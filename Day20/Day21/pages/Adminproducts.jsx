import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        
        const response = await fetch("http://localhost:8080/api/products" , {
        headers: {
            'Authorization':`Bearer ${localStorage.getItem("token")}`,
            'Content-Type':"application/json"
        }});
        const responseData = await response.json();

        if (componentMounted) {
          if (Array.isArray(responseData)) {
            setData(responseData);
            setFilter(responseData);
          } else {
            console.error("Response data is not an array:", responseData);
            setFilter([]);
          }

          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.categoryname === cat);
    setFilter(updatedList);
  };

  const deleteProduct = (id) => {
    // Send a DELETE request to the backend to delete the product
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Product deleted successfully
          // You may want to refresh the product list or perform other actions here
          console.log("Product deleted successfully!");
        } else {
          console.error("Failed to delete the product.");
        }
      })
      .catch((error) => {
        console.error("Error occurred while deleting the product:", error);
      });
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("dairy")}>Dairy</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("vegetables")}>
            Vegetables
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("fruits")}>Fruits</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("meat")}>Meat</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/edit/" + product.id} className="btn btn-dark m-1">
                    Edit
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </div>
              </div>
              
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <Link to="/addproduct" className="btn btn-dark">
              Add Product
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default AdminProducts;
