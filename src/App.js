import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src="magic_wand.svg" alt="magic wand" />
        </header>
        <main>
          <h1>Kat's Dictionary</h1>
          <h5>Type a word to see some magic happen ✨</h5>
          <Dictionary />
        </main>
        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/katharina-haas-283675174/"
            rel="noreferrer"
            target="blank"
          >
            Kat Haas
          </a>{" "}
          🐰 and is{" "}
          <a
            href="https://github.com/haka1013/dictionary-app"
            rel="noreferrer"
            target="blank"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
