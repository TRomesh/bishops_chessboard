import { ReactNode, useState } from "react";
import { Square } from "./components/Square";

const getMoveableSquares = (selected: string): Array<string> => {
  const cordinates = [];
  const x = parseInt(selected.split("")[0]);
  const y = parseInt(selected.split("")[2]);
  for (let i = x; 0 < i; i--) {
    if (x - i >= 0 && y - i >= 0) {
      cordinates.push(`${x - i}-${y - i}`);
    }
  }
  let yaxis = y;
  for (let j = x; j <= 7; j++) {
    if (j <= 7 && yaxis <= 7) {
      cordinates.push(`${j}-${yaxis++}`);
    }
  }

  let yaxis1 = y;
  for (let i = x; 0 <= i; i--) {
    cordinates.push(`${i}-${yaxis1++}`);
  }

  let yaxis2 = y;
  for (let j = x; j <= 7; j++) {
    cordinates.push(`${j}-${yaxis2--}`);
  }

  return cordinates;
};

function App() {
  const [selected, setSelected] = useState("");
  const [movingSquares, setMovingSquares] = useState<Array<string>>([]);

  const handleOnClick = (value: string) => {
    setSelected(value);
    setMovingSquares(getMoveableSquares(value));
  };

  const renderSqares = (): Array<ReactNode> => {
    const sqares: Array<ReactNode> = [];
    let isWhite: boolean = false;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        sqares.push(
          <Square
            rowNo={i}
            sqareNo={j}
            key={`${i}-${j}`}
            isWhite={isWhite}
            selected={selected}
            movingSquares={movingSquares}
            onClick={handleOnClick}
          />
        );
        isWhite = !isWhite;
      }
      isWhite = !isWhite;
    }
    return sqares;
  };

  return (
    <>
      <div className="grid grid-cols-8 grid-rows-8 border-2 border-black w-360 h-360 mt-10 ml-80 mr-80 mb-10">
        {renderSqares()}
      </div>
    </>
  );
}

export default App;