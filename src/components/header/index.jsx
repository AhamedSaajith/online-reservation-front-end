import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "./style.css";

export default function Header() {
  const location = useLocation(); // Get the current path

  // Function to determine if the current path matches the link
  const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          {/* Valid href for the logo */}
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
                <li className="nav-item">
                  <a
                    className={`${isActive("/home")} mx-lg-2`}
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`${isActive("/about")} mx-lg-2`} href="/about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`${isActive("/contact")} mx-lg-2`} href="/contact">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`${isActive("/reviews")} mx-lg-2`} href="/reviews">
                    Reviews
                  </a>
                </li>

                <li className="nav-item">
                  <a className={`${isActive("/subscribe")} mx-lg-2`} href="/subscribe">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/" className="login-button ms-3">
            Log out
          </a>
          <button
            className="navbar-toggler pe-0"
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
