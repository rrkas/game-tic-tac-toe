import { useEffect, useState } from "react";
import Board from "./components/Board";
import {
  EMPTY_MARKER,
  INITIAL_BOARD,
  USER_MARKER,
  autoPlayNextMove,
  checkWinner,
  cloneObject,
} from "./utils";

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner !== null) {
      alert(`You ${winner === USER_MARKER ? "WON" : "LOST"}!`);
      setBoard(INITIAL_BOARD);
    } else if (board.every((row) => row.every((e) => e !== EMPTY_MARKER))) {
      alert("Its a Tie!");
    }
  }, [board]);

  function cellClickHandler(ri, ci) {
    setBoard((p) => {
      var board = cloneObject(p);
      if (board[ri][ci] !== EMPTY_MARKER) return board;
      board[ri][ci] = USER_MARKER;
      board = autoPlayNextMove(board);
      return board;
    });
  }

  return (
    <div className="page page-body">
      <div className="container-fluid">
        <div className="h1 text-center mb-4">Tic-Tac-Toe</div>
        <div className="text-center">
          <Board board={board} cellClickHandler={cellClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
