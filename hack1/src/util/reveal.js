/****************************************************************************
  FileName      [ reveal.js ]
  PackageName   [ src/util ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file states the reaction when left clicking a cell. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

export const revealed = (board, x, y, newNonMinesCount) => {
    {/* -- TODO 4-2 -- */}
    {/* Useful Hint: If the cell is already revealed, do nothing. */}
    {/* Useful Hint: If the value of the cell is not 0, only show the cell value. */}
    var boardSize = board.length
    board[x][y].revealed = true;
    newNonMinesCount = newNonMinesCount + 1;
    {/* -- TODO 4-2 -- */}
    {/* Useful Hint: If the value of the cell is 0, we should try to find the value of adjacent cells until the value we found is not 0. */}
    {/* Useful Hint: The input variables 'newNonMinesCount' and 'board' may be changed in this function. */}
    if (board[x][y].value === 0) {
      if(x-1>=0 && y-1>=0 && board[x-1][y-1].revealed === false && board[x-1][y-1].flagged === false) {
        var temp = revealed(board, x-1, y-1, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(x-1>=0 && board[x-1][y].revealed === false && board[x-1][y].flagged === false) {
        temp = revealed(board, x-1, y, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(x-1>=0 && y+1<boardSize && board[x-1][y+1].revealed === false && board[x-1][y+1].flagged === false) {
        temp = revealed(board, x-1, y+1, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(y-1>=0 && board[x][y-1].revealed === false && board[x][y-1].flagged === false) {
        temp = revealed(board, x, y-1, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(y+1<boardSize && board[x][y+1].revealed === false && board[x][y+1].flagged === false) {
        temp = revealed(board, x, y+1, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(x+1<boardSize && y-1>=0 && board[x+1][y-1].revealed === false && board[x+1][y-1].flagged === false) {
        temp = revealed(board, x+1, y-1, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(x+1<boardSize && board[x+1][y].revealed === false && board[x+1][y].flagged === false) {
        temp = revealed(board, x+1, y, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }
      if(x+1<boardSize && y+1<boardSize && board[x+1][y+1].revealed === false && board[x+1][y+1].flagged === false) {
        temp = revealed(board, x+1, y+1, newNonMinesCount);
        board = temp.board;
        newNonMinesCount = temp.newNonMinesCount;
      }      
    }
    
    return {board, newNonMinesCount};
};
