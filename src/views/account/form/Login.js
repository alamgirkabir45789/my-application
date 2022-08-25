import React from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
const Login = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Twitter</div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or{" "}
          <Link href="#" to={`/register`}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
