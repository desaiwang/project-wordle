import React from "react";

function PreviousGuesses({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map(({ guess, uuid }) => (
        <p key={uuid} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
