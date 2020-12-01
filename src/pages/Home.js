import React from "react";

function Home() {
  return (
    <div class="container-fluid row">
      <div class="card col-sm-12 col-md-6">
        <h1 class="bold">Portfolio </h1>
      </div>
      <br />

      <div>
        <h3>Lets Hit the Slopes- Project 1</h3>
        <p>
          Open Home Page PDF file{" "}
          <a href="./assets/lhs_screen_shot.pdf">example</a>.
        </p>
      </div>

      <div>
        <h3>Shelf Indulgence Book Club- Project 2</h3>
        <p>
          Open Home Page PDF file{" "}
          <a href="./assets/ShelfIndulgence.pdf">example</a>.
        </p>
      </div>

      <div>
        <h3>Good ReadMe Generator</h3>
        <p>
          Open a PDF file <a href="./assets/goodReadMeGen.pdf">example</a>.
        </p>
      </div>

      <div>
        <h3>Burger Logger</h3>
        <p>
          Open a PDF file <a href="./assets/burger_logger.pdf">example</a>.
        </p>
      </div>

      <div>
        <h3>Budget Tracker</h3>
        <p>
          Open a PDF file <a href="./assets/budgetTracker.pdf">example</a>.
        </p>
      </div>

      <div>
        <h3>Employee Directory</h3>
        <p>
          Open a PDF file <a href="./assets/employeeDirectory.pdf">example</a>.
        </p>
      </div>

      <div class="gitHub">
        <a href="https://www.github.com/MarkBrazee" target="_blank">
          Visit my GitHub page
        </a>
      </div>

      <div class="linkedIn">
        <a href="https://www.linkedin.com/in/markbrazee/" target="_blank">
          Vist my LinkedIn page
        </a>
      </div>

      <div class="resume">
        <a
          href="https://docs.google.com/document/d/1pmge-tHHlhI3S2-g_hs-lB-e4qO_9wZVepZTgjeZSeE/edit?usp=sharing"
          target="_blank"
        >
          View my resume
        </a>
      </div>

      <div class="email">
        <p>
          Email: <a href="mailto:m.brazee@comcast.net">Mark Brazee</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
