import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers.js";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("");

  function addGuess(guess) {
    const updatedGuesses = [...guesses];

    const results = checkGuess(guess, answer);
    console.log("checking results", results);

    updatedGuesses.push({
      guess: guess,
      uuid: crypto.randomUUID(),
      results: results,
    });
    setGuesses(updatedGuesses);

    //check status
    console.log("guesses.length", updatedGuesses.length);
    if (results.filter((result) => result.status === "correct").length === 5) {
      setStatus("win");
    } else if (updatedGuesses.length >= 6) {
      setStatus("lose");
    }
  }

  console.log("status is", status);
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} disabled={status !== ""} />
      <Banner status={status} numGuesses={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
