import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>Definition: {props.meaning.definition}</p>
      <p>
        Example: <em>{props.meaning.example}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
