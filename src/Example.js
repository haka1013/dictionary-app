import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <p>
        <span className="type">Example:</span> {props.example}
      </p>
    );
  } else {
    return null;
  }
}
