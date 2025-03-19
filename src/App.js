import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let arr = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
    ],
    [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
      [3, 6],
      [3, 7],
    ],
    [
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6],
      [4, 7],
    ],
    [
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [5, 6],
      [5, 7],
    ],
    [
      [6, 0],
      [6, 1],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, 5],
      [6, 6],
      [6, 7],
    ],
    [
      [7, 0],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      [7, 7],
    ],
  ];

  const [knightPositions, setKnightPositions] = useState([]);

  function handleClick(element) {
    let moves = [
      [-2, -1],
      [-2, 1],
      [2, -1],
      [2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
    ];
    let row = element[0];
    let column = element[1];
    let required = [];

    moves.forEach(([r, c]) => {
      let newRow = row + r;
      let newCol = column + c;
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        required.push([newRow, newCol]);
      }
    });

    setKnightPositions(required);
  }

  function showChessBlock(ele, index) {
    return ele.map((element, ind) => {
      let isHighlighted = false;
      for (let pos of knightPositions) {
        if (pos[0] === element[0] && pos[1] === element[1]) {
          isHighlighted = true;
          break;
        }
      }

      return (
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid black",
            backgroundColor: isHighlighted
              ? "red"
              : (index + ind) % 2 === 0
              ? "#fff"
              : "#000",
          }}
          onClick={() => handleClick(element)}
        ></div>
      );
    });
  }

  return (
    <div className="App" style={{ border: "1px solid black" }}>
      {arr.map((ele, index) => {
        return (
          <div
            style={{
              height: "100px",
              width: "auto",
              border: "1px solid black",
              display: "flex",
            }}
          >
            {showChessBlock(ele, index)}
          </div>
        );
      })}
    </div>
  );
}
