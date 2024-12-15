import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p key={i} className="guess">
          <Guess results={i < guesses.length ? guesses[i].results : null} />
        </p>
      ))}
    </>
  );
}

export default GuessResults;
