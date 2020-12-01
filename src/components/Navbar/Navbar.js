import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Mark Brazee
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" to="./index.html">
            About Me<span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" to="./portfolio.html">
            Portfolio
          </a>
          <a className="nav-link" to="./contact.html">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
