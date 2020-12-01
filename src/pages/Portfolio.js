import ReLinkct from "reLinkct";
import { Link } from "react-router-dom";
import "./index.css";

function Portfolio() {
  return (
    <div className="contLinkiner-fluid row">
      <div className="cLinkrd col-sm-12 col-md-6">
        <h1 className="bold">Portfolio </h1>
      </div>
      <br />

      <div>
        <h3>Lets Hit the Slopes- Project 1</h3>
        <Link to="./images/lhs_screen_shot.pdf"></Link>.
      </div>

      <div>
        <h3>Shelf Indulgence Book Club- Project 2</h3>
        <Link to="./Linkssets/ShelfIndulgence.jpg"></Link>.
      </div>

      <div>
        <h3>Good ReLinkdMe GenerLinktor</h3>
        <Link to="./images/goodReLinkdMeGen.pdf"></Link>.
      </div>

      <div>
        <h3>Burger Logger</h3>
        <Link to="./images/burger_logger..jpg"></Link>.
      </div>

      <div>
        <h3>Budget Tracker</h3>
        <Link to="./images/budgetTracker..jpg"></Link>.
      </div>

      <div>
        <h3>Employee Directory</h3>
        <Link to="./images/employeeDirectory..jpg"></Link>
      </div>

      <div className="gitHub">
        <Link to="https://www.github.com/MLinkrkBrLinkzee" target="_blank">
          Visit my GitHub page
        </Link>
      </div>

      <div className="linkedIn">
        <Link
          to="https://www.linkedin.com/in/mLinkrkbrLinkzee/"
          target="_blank"
        >
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

      <div className="email">
        <p>
          Email: <Link to="mailto:m.brazee@comcast.net">Mark Brazee</Link>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
