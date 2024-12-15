import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess.toUpperCase());
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        pattern="\[a-zA-Z]{5,5}"
        required
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      ></input>
    </form>
  );
}

export default GuessInput;
