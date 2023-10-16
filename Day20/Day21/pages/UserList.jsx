import React, { useState, useEffect } from 'react';
import { Navbar , Footer } from '../components';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  // Fetch user details from the backend
  useEffect(() => {
    
    fetch('http://localhost:8080/api/users', {
        method: "GET", // Use PUT to update the data
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        
      })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching user details:', error));
      console.log(users);
  }, []);

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <h1 className="text-center">User Details</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Country</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.billingDetails.address}</td>
              <td>{user.billingDetails.country}</td>
              <td>{user.billingDetails.state}</td>
              <td>{user.billingDetails.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default UserListPage;
