import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <span className="text-decoration-underline">Opposite:</span>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
