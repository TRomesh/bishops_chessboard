export const Square = ({
  rowNo,
  onClick,
  sqareNo,
  isWhite,
  selected,
  movingSquares,
}: {
  rowNo: number;
  sqareNo: number;
  isWhite: boolean;
  selected?: string;
  movingSquares: Array<string>;
  onClick: (value: string) => void;
}) => {
  const isMoveable = movingSquares.includes(`${rowNo}-${sqareNo}`);
  const bgColor = isMoveable
    ? "bg-blue-600 text-white"
    : isWhite
    ? "bg-white text-black"
    : "bg-black text-white";

  const border =
    selected === `${rowNo}-${sqareNo}` ? `border-4 border-yellow-500` : null;

  return (
    <div
      id={`${rowNo}-${sqareNo}`}
      onClick={() => onClick(`${rowNo}-${sqareNo}`)}
      className={`${bgColor} ${border} hover:bg-blue-400 w-full h-20 flex justify-center items-center cursor-pointer`}
    />
  );
};
