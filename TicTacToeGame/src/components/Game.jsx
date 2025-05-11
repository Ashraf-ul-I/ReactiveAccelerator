import React from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const [isNextX, setIsNext] = React.useState(true);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setIsNext(!isNextX);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="w-full text-left px-4 py-2 my-1 rounded bg-white hover:bg-blue-100 shadow transition duration-200"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 animate-pulse">
        🕹️ Tic Tac Toe
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <Board
            isNextX={isNextX}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-xl w-64 max-h-80 overflow-auto">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Game History
          </h2>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
