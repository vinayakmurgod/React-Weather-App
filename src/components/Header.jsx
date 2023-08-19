import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-xl">
          <Link to="/" className="navbar-brand">
            Weather app &nbsp; <i className="bi bi-cloud-lightning-rain-fill"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home <i className="bi bi-house-fill"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Weather" className="nav-link">
                  Weather &nbsp;
                  <i className="bi bi-brightness-high-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
