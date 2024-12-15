import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function Guess({ guesses }) {
  console.log("guesses in Guess.js", guesses);
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p key={i} className="guess">
          {i >= guesses.length
            ? range(5).map((j) => <span key={j} className="cell"></span>)
            : range(5).map((j) => (
                <span key={j} className="cell">
                  {guesses[i].guess[j]}
                </span>
              ))}
        </p>
      ))}
    </>
  );
}

export default Guess;
