import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Day1 } from "./Day1/Day1";
// import { Day2 } from "./Day2/Day2";
// import { Day3 } from "./Day3/Day3";
// import { Day4 } from "./Day4/Day4";
// import { Day5 } from "./Day5/Day5";
import { Day6 } from "./Day6/Day6";

function App() {
  // Day1();
  // Day2()
  // Day3();
  // Day4();
  // Day5();
  Day6();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
