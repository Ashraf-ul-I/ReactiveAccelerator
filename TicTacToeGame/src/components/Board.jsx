import { useEffect, useMemo } from "react";
import useSound from "use-sound";
import Square from "./Square";

const Board = ({ squares, isNextX, onPlay }) => {
  const soundUrl = "/winning_sounf.wav";
  const [play] = useSound(soundUrl, {
    sprite: {
      win: [0, 350],
    },
  });

  const { winner, winningLine } = useMemo(
    () => calculateWinner(squares),
    [squares]
  );

  useEffect(() => {
    if (winner) {
      play({ id: "win" });
    }
  }, [winner, play]);

  let status = winner
    ? `🎉 Winner: ${winner}!`
    : `Next player: ${isNextX ? "❌" : "⭕"}`;

  function handleClick(i) {
    if (squares[i] !== null || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = isNextX ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <div className="text-center mt-6">
      <div
        className={`text-2xl font-bold mb-6 transition-transform duration-500 ${
          winner ? "text-green-600 animate-bounce" : ""
        }`}
      >
        {status}
      </div>
      <div className="inline-block">
        {[0, 1, 2].map((row) => (
          <div className="flex" key={row}>
            {[0, 1, 2].map((col) => {
              const i = row * 3 + col;
              return (
                <Square
                  key={i}
                  value={squares[i]}
                  onSquareClick={() => handleClick(i)}
                  highlight={winningLine.includes(i)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;

// Now returns both winner and winning line
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningLine: [a, b, c] };
    }
  }
  return { winner: null, winningLine: [] };
}
