import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./signup.css";
const Signup = () => {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/postSaveSignupDetails", {
        emailid: emailid,
        password: password,
        username: username,
      });
      alert("User Registation Successfully");
      setEmailid("");
      setPassword("");
      setUsername("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }

  return (
    <>
      <div class="signhead">
        <form onSubmit={handleSubmit}>
          <h2>Register to your Account</h2>
          <div>
            <label for="text">Username</label>
            <input
              class="inputboxx"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
            <label for="text">Email</label>
            <input
              class="inputboxx"
              type="email"
              onChange={(event) => {
                setEmailid(event.target.value);
              }}
            ></input>
            <label for="text">password</label>
            <input
              class="inputboxx"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <button type="submit">Register</button>
          <p>Already registered ? <Link to="/" style={{color: "inherit",textDecoration:"none"}}>Login</Link></p>
        </form>
      </div>
    </>
  );
};
export default Signup;