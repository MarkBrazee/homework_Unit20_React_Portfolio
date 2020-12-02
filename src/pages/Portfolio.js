import React from "react";
import { Link } from "react-router-dom";
import LHS from "../images/lhs_screen_shot.pdf";
import Shelf from "../images/ShelfIndulgence.jpg";
import GRG from "../images/goodReadMeGen.pdf";
import Burger from "../images/burger_logger.jpg";
import Budget from "../images/budgetTracker.jpg";
import Employee from "../images/employeeDirectory.jpg";

// import "./index.css";

function Portfolio() {
  return (
    <div className="container" id="main-bio">
      <div className="row">
        <div className="col">
          <h1 className="bold">Portfolio </h1>
        </div>
      </div>
      <br />

      <div className="row">
        <div className=" col-6 col-sm-12 col-md-6">
          <h3>Lets Hit the Slopes- Project 1</h3>
          <br />
          <img src={LHS} alt="Lets Hit the Slopes" />.
        </div>

        <div className=" col-6 col-sm-12 col-md-6">
          <h3>Shelf Indulgence- Project 2</h3>
          <br />
          <img src={Shelf} alt="Shelf Indulgence" />.
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className=" col-6 col-sm-12 col-md-6">
          <h3>Good ReadMe Generator</h3>
          <br />
          <img src={GRG} alt="Good Readme Generator" />.
        </div>

        <div className=" col-6 col-sm-12 col-md-6">
          <h3>Burger Logger</h3>
          <br />
          <img src={Burger} alt="Burger Logger" />.
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className=" col-6 col-sm-12 col-md-6">
          <h3>Budget Tracker</h3>
          <br />
          <img src={Budget} alt="Budget Tracker" />.
        </div>

        <div className=" col-6 col-sm-12 col-md-6">
          <h3>Employee Directory</h3>
          <br />
          <img src={Employee} alt="Employee Directory" />.
        </div>
      </div>
      <br />
      <br />
      <div className="gitHub">
        <Link to="https://www.github.com/MarkBrazee" target="_blank">
          Visit my GitHub page
        </Link>
      </div>

      <div className="linkedIn">
        <Link to="https://www.linkedin.com/in/markbrazee/" target="_blank">
          Vist my LinkedIn page
        </Link>
      </div>

      <div className="resume">
        <Link
          to="https://docs.google.com/document/d/1pmge-tHHlhI3S2-g_hs-lB-e4qO_9wZVepZTgjeZSeE/edit?usp=shLinkring"
          target="_blank"
        >
          View my resume
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
