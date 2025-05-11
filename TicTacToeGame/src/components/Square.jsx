import useSound from "use-sound";

const Square = ({ value, onSquareClick, highlight }) => {
  const soundUrl = "/909-drums.wav";
  const [play] = useSound(soundUrl, {
    sprite: {
      kick: [0, 350],
    },
  });
  const baseStyle =
    "h-16 w-16 m-1 flex items-center justify-center border border-gray-300 text-2xl font-bold transition-all duration-300";
  const highlightStyle = highlight
    ? "bg-green-200 animate-pulse"
    : "bg-white hover:bg-gray-100";

  const valueColor =
    value === "X" ? "text-blue-600" : value === "O" ? "text-red-500" : "";
  return (
    <button
      className={`${baseStyle} ${highlightStyle} ${valueColor}`}
      onClick={(e) => {
        onSquareClick(e);
        play({ id: "kick" }); // ✅ Needed when using sprite
      }}
    >
      {value}
    </button>
  );
};

export default Square;
