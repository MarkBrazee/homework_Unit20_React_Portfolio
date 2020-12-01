import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Contact() {
  return (
    <div className="container-fluid row">
      <div className="card col-sm-12 col-md-6">
        <h1 className="bold">Contact </h1>
      </div>

      <div>
        <div className="email">
          <p>
            Email: <Link to="mailto:m.brazee@comcast.net">Mark Brazee</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
