import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function search(keyword) {
    let apiKey = `f552o2btc343e2d6edd4e830ffa6cab0`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" />
        </form>
      </div>
    );
  } else {
    search(`sunrise`);
    return "Loading";
  }
}
