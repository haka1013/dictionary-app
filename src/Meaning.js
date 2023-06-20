import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">
          <Example example={props.meaning.example} />
        </div>
        <div className="synonyms">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
        <div className="antonyms">
          <Antonyms antonyms={props.meaning.antonyms} />
        </div>
      </section>
    </div>
  );
}
