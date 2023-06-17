import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>This is a header.</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This app was coded by Kat Haas and is{" "}
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
