import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers.js";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function addGuess(guess) {
    const updatedGuesses = [...guesses];

    const results = checkGuess(guess, answer);

    updatedGuesses.push({
      guess: guess,
      uuid: crypto.randomUUID(),
      results: results,
    });
    setGuesses(updatedGuesses);

    //check status
    if (guess === answer) {
      setStatus("won");
    } else if (updatedGuesses.length >= 6) {
      setStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} status={status} />
      {status === "won" && <WonBanner numGuesses={guesses.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
