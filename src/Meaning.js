import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>Definition: {props.meaning.definition}</p>
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
