import { useEffect, useState } from "react";

const Scorekeeper = () => {
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")!) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <div className="grid justify-center">
      <span>Your score is: {score}</span>
      <div className="flex space-x-2">
        <button
          className="border p-1"
          onClick={() => setScore((prevScore) => prevScore - 1)!}
        >
          -
        </button>
        <button
          className="border p-1"
          onClick={() => setScore((prevScore) => prevScore + 1)!}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Scorekeeper;
