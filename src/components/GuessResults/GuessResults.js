import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  console.log("guesses in Guess.js", guesses);
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p className="guess">
          <Guess key={i} guess={i < guesses.length ? guesses[i].guess : null} />
        </p>
      ))}
    </>
  );
}

export default GuessResults;
