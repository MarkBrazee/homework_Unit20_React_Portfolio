import React from "react";
import { Link } from "react-router-dom";
import Mark from "../images/Seagull2009-G7.jpg";
// import "./index.css";

function Home() {
  return (
    <section className="container" id="main-bio">
      <div className="row">
        <div className="col">
          <h1 className="bold">About Me </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-4">
          <img src={Mark} alt="Mark Brazee cycling photo" />
        </div>
        <div className="col-12 col-sm-12 col-lg-8">
          <p>
            I am an Oregon native. I've been married to my beautiful wife,
            Leigh, for 30 years. We have two wonderful children, Tyler and
            Alyssa. I have lived in Aurora, Colorado for 25 years. I am an
            University of Oregon graduate, Go Ducks! I am a former Aurora
            Academy Charter School School Board Member. I am concerned about the
            earth and what my children will inherit from previous generations. I
            am an avid cyclist, riding 2,000 to 3,000 miles a year. I am looking
            to augment or change my professional background after 30 years in
            the architectural industry. I love to ride in the Colorado Rocky
            Mountains. I would love to ride in the French, Swiss and Italian
            Alps someday, soon. I am a long time Colorado Rockies and Seattle
            Mariners fan. I am a Star Wars and Star Trek fan. This is the Way
            and Live Long and Prosper. I would like to be at the beach. I am a
            life-long Democrat. I am looking to augment or change my
            professional background after 30 years in the architectural
            industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
