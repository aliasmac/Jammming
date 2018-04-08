class Game {
  constructor(numberOfRows, numberOfColumns,numberOfBombs) {
    this._Board = new Board(numberOfRows, numberOfColumns,numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._Board.flipTile(rowIndex, columnIndex)
    if(this.Board.playBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over');
      this._board.print();
    } else if(this.board !== hasSafeTiles()) {
      console.log('You Win');
    } else {
      console.log('Current Board: ')
      this._board.print();
    }
  }
}




class Board {
  constructor(numberOfRows, numberOfColumns,numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get PlayerBoard() {
    return this._playerBoard;
  }

  flipTile = (rowIndex, columnIndex) => {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('Already flipped that tile!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  };

 getNumberOfNeighborBombs = function(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;

    let this.numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
          neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return this.numberOfBombs;
  };

  hasSafeTiles() {
    return (this._numberOfTiles !== this._numberOfBombs);
  }


  print() = {
    console.log(board.map(row => row.join(' | ')).join('\n'));
  };

  static generatePlayerBoard = (numberOfRows, numberOfColumns) {
    const board = [];

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  };


  static generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) {
    const board = [];

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(null);
      }
      board.push(row);
    }

    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  };



}


print() = {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const g = new Game(3, 3, 3);

g.playMove(2,4);
