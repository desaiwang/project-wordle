import React from "react";

function HappyBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses} guess{numGuesses > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ status, numGuesses, answer }) {
  if (status === "lose") {
    return <SadBanner answer={answer} />;
  } else if (status === "win") {
    return <HappyBanner numGuesses={numGuesses} />;
  } else return <></>;
}

export default Banner;
