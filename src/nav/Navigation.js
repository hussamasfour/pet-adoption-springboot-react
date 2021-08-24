import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top border-bottom bg-transparent">
      <div className="container ">
        <div className="navbar-header">
          <Link className="navbar-brand text-white" to="/">
            PETOS
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-right mr-auto">
            <li className="nav-item mr-4">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link text-white" to="/explore">
                Explore
              </Link>
            </li>

            <li className="nav-item ml-4">
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
