import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("adding guess in GuessInput", guess);
    addGuess(guess);
    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5,5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
