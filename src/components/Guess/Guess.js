import React from "react";
import { range } from "../../utils.js";

function Guess({ results }) {
  return (
    <>
      {results
        ? range(5).map((j) => (
            <span key={j} className={`cell ${results[j].status}`}>
              {results[j].letter}
            </span>
          ))
        : range(5).map((j) => <span key={j} className="cell"></span>)}
    </>
  );
}

export default Guess;
