import { useState } from "react";

const Scorekeeper = () => {
  const [score, setScore] = useState(localStorage.getItem("score"));

  const handleAdd = () => {
    const currentScore = parseInt(score!) + 1;
    setScore(currentScore.toString());
    localStorage.setItem("score", currentScore.toString()!);
  };

  const handleMinus = () => {
    const currentScore = parseInt(score!) - 1;
    setScore(currentScore.toString());
    localStorage.setItem("score", currentScore.toString()!);
  };

  return (
    <div className="grid justify-center">
      <span>Your score is: {score}</span>
      <div className="flex space-x-2">
        <button className="border p-1" onClick={handleMinus}>
          -
        </button>
        <button className="border p-1" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default Scorekeeper;
