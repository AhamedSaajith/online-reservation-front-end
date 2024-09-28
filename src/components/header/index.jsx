import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink to handle active state dynamically
import "./style.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="/">
            Flavor Haven
          </a>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Flavor Haven
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto justify-content-center flex-grow-1 pe-3">
                {/* Using NavLink for dynamic active state */}
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "nav-link mx-lg-2"
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "nav-link mx-lg-2"
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "nav-link mx-lg-2"
                    }
                  >
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/reviews"
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "nav-link mx-lg-2"
                    }
                  >
                    Reviews
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/subscribe"
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "nav-link mx-lg-2"
                    }
                  >
                    Subscribe
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <a href="/" className="login-button ms-3">
            Log out
          </a>

          <button
            className="navbar-toggler pe-0" // Fixed typo
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
