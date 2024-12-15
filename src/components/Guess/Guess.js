import React from "react";
import { range } from "../../utils.js";

function Guess({ guess }) {
  //console.log("guess in Guess.js", guess);
  return (
    <>
      {guess
        ? range(5).map((j) => (
            <span key={j} className="cell">
              {guess[j]}
            </span>
          ))
        : range(5).map((j) => <span key={j} className="cell"></span>)}
    </>
  );
}

export default Guess;
