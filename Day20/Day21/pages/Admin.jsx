import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
    <div>
      <div className="container my-3 py-3">
        <h1 className="text-center">Admin Dashboard</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="card my-3">
              <div className="card-body">
                <h5 className="card-title">Manage Products</h5>
                <p className="card-text">
                  Add, edit, or delete grocery products in the store.
                </p>
                <Link to="/adminproduct" className="btn btn-primary">
                  Go to Products
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card my-3">
              <div className="card-body">
                <h5 className="card-title">Manage Users</h5>
                <p className="card-text">
                  View and edit users.
                </p>
                <Link to="/userlist" className="btn btn-primary">
                  Users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <Footer /> */}
    </>
  );
};

export default AdminDashboard;
