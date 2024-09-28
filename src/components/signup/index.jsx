import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Register() {
  return (
    <div className="Signup">
      <div className="container">
        <form className="w-50 mx-auto py-5 p-4 shadow">
          <h3>Sign Up</h3>
          <hr></hr>
          <div className="mb-3">
            <label for="exampleInputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="firstname"
              className="form-control"
              id="exampleFirstName1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputFirstName" className="form-label">
              Last Name
            </label>
            <input
              type="firstname"
              className="form-control"
              id="exampleFirstName1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <Link to="/" className="btn btn-primary me-2">
            Save
          </Link>
          <Link to="/" classNameName="btn btn-secondary">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
