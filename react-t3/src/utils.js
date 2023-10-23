export const EMPTY_MARKER = " ";
export const USER_MARKER = "O";
export const SYSTEM_MARKER = "X";

export const INITIAL_BOARD = [
  [EMPTY_MARKER, EMPTY_MARKER, EMPTY_MARKER],
  [EMPTY_MARKER, EMPTY_MARKER, EMPTY_MARKER],
  [EMPTY_MARKER, EMPTY_MARKER, EMPTY_MARKER],
];

export const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));

export function autoPlayNextMove(board) {
  const newBoard = cloneObject(board);
  const emptyCellIDs = [];
  for (var ri = 0; ri < board.length; ri++) {
    for (var ci = 0; ci < board[ri].length; ci++) {
      if (newBoard[ri][ci] === EMPTY_MARKER) {
        emptyCellIDs.push([ri, ci]);
      }
    }
  }
  if (emptyCellIDs.length > 0) {
    const systemMove =
      emptyCellIDs[Math.floor(Math.random() * emptyCellIDs.length)];
    newBoard[systemMove[0]][systemMove[1]] = SYSTEM_MARKER;
  }
  return newBoard;
}

export function checkWinner(board) {
  // row wise
  for (var i = 0; i < board.length; i++) {
    if (board[i].every((e) => e === board[i][0] && e !== EMPTY_MARKER)) {
      return board[i][0];
    }
  }
  // col wise
  for (var i = 0; i < board.length; i++) {
    if (board.every((e) => e[i] === board[0][i] && e[i] !== EMPTY_MARKER)) {
      return board[0][i];
    }
  }
  // diagonal wise
  const center = board[1][1];
  if (
    board.every(
      (e, i) => board[i][i] === center && board[i][i] !== EMPTY_MARKER
    ) ||
    board.every(
      (e, i) => board[i][2 - i] === center && board[i][2 - i] !== EMPTY_MARKER
    )
  ) {
    return center;
  }

  return null;
}
