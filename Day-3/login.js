import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault(); 
    try {
      await axios
        .post("http://localhost:8080/login", {
          username: username,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);  

            if (res.data.message === "Username not exits") {
              alert("Username not exits");
            } else if (res.data.message === "Login Success") {
              navigate("/home");
            } else {
              alert("Username and Password not match , plz check");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <div class="loginhead">
        <form onSubmit={login}>
          <h2>Log In to Your Account</h2>
          <div class="inputs">
            <label for="email">Username</label>
            <input
              class="inputbox"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
            <label for="password">Password</label>
            <input
              class="inputbox"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <button type="submit" style={{color: "inherit",textDecoration:"none",marginLeft:"-1px"}}><Link to="/home" style={{color: "inherit",textDecoration:"none"}}>Log in</Link></button>
          <p style={{textAlign:"center"}}>
            need an account ?<Link to="/sign" style={{color: "inherit",textDecoration:"none"}} >Sign up</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
export default Login;