import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Login() {
  return (
    <div className="Login">
      <div className="container">
        <form className="w-50 mx-auto py-5 p-4 shadow">
          <h3>Login</h3>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <Link to="/home" className="btn btn-primary me-2">
            Submit
          </Link>

          <Link to="/register" className="btn btn-secondary">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}
