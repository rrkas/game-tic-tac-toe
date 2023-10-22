export const USER_MARKER = "O";
export const SYSTEM_MARKER = "X";

export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function autoPlayNextMove(board) {
  const newBoard = cloneObject(board);
  const emptyCellIDs = [];
  for (var ri = 0; ri < board.length; ri++) {
    for (var ci = 0; ci < board[ri].length; ci++) {
      if (newBoard[ri][ci] === " ") {
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
