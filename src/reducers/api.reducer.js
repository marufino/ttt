import initialState from './initialState';

export default function (state = initialState.api, action) {
  if (action.type === 'PLAY_SQUARE') {
    const newBoard = updateObjectInArray(state.board, {
      squareIndex: action.squarePlay,
      boardIndex: action.boardPlay,
      item: {
        value: action.player,
        inactive: true
      }
    });

    const mainBoard = createLargeBoard(newBoard, state.largeBoard);

    return {
      ...state,
      squarePlay: action.squarePlay,
      boardPlay: action.boardPlay,
      player: state.player === 'X' ? 'O' : 'X',
      board: newBoard,
      activeBoard: action.squarePlay,
      largeBoard: mainBoard,
      winner: largeBoardWinner(mainBoard)
    };
  }

  return state;
}

function createLargeBoard(boards, largeBoard) {
  const squares = [];
  boards.forEach((board, idx) => {
    if (largeBoard[idx] === '') {
      squares.push(determineWinner(board));
    } else {
      squares.push(largeBoard[idx]);
    }
  });
  console.log(squares);
  return squares;
}

function determineWinner(squares) {
  // Horizontal
  console.log(squares);
  if ((squares[0].value == squares[1].value) && (squares[1].value == squares[2].value)) {
    if (squares[0].value !== '') { return squares[0].value; }
  }

  if ((squares[3].value == squares[4].value) && (squares[4].value == squares[5].value)) {
    if (squares[3].value !== '') { return squares[3].value; }
  }

  if ((squares[6].value == squares[7].value ) && (  squares[7].value == squares[8].value)) {
    if (squares[6].value !== '') { return squares[6].value; }
  }

  // Vertical
  if ((squares[0].value == squares[3].value ) && (  squares[3].value == squares[6].value)) {
    if (squares[0].value !== '') { return squares[0].value; }
  }

  if ((squares[1].value == squares[4].value ) && (  squares[4].value == squares[7].value)) {
    if (squares[1].value !== '') { return squares[1].value; }
  }

  if ((squares[2].value == squares[5].value ) && (  squares[5].value == squares[8].value)) {
    if (squares[2].value !== '') { return squares[2].value; }
  }

  // Diagonal
  if ((squares[0].value == squares[4].value ) && (  squares[4].value == squares[8].value)) {
    if (squares[0].value !== '') { return squares[0].value; }
  }

  if ((squares[2].value == squares[4].value ) && (  squares[4].value == squares[6].value)) {
    if (squares[2].value !== '') { return squares[2].value; }
  }

  return '';
}

function largeBoardWinner(squares) {
  if ((squares[0] == squares[1]) && (squares[1] == squares[2])) {
    if (squares[0] !== '') { return squares[0]; }
  }

  if ((squares[3] == squares[4]) && (squares[4] == squares[5])) {
    if (squares[3] !== '') { return squares[3]; }
  }

  if ((squares[6] == squares[7] ) && (  squares[7] == squares[8])) {
    if (squares[6] !== '') { return squares[6]; }
  }

  // Vertical
  if ((squares[0] == squares[3] ) && (  squares[3] == squares[6])) {
    if (squares[0] !== '') { return squares[0]; }
  }

  if ((squares[1] == squares[4] ) && (  squares[4] == squares[7])) {
    if (squares[1] !== '') { return squares[1]; }
  }

  if ((squares[2] == squares[5] ) && (  squares[5] == squares[8])) {
    if (squares[2] !== '') { return squares[2]; }
  }

  // Diagonal
  if ((squares[0] == squares[4] ) && (  squares[4] == squares[8])) {
    if (squares[0] !== '') { return squares[0]; }
  }

  if ((squares[2] == squares[4] ) && (  squares[4] == squares[6])) {
    if (squares[2] !== '') { return squares[2]; }
  }

  return '';
}

function updateObjectInArray(boards, action) {
  return boards.map((board, boardIndex) => {
    if (boardIndex !== action.boardIndex) {
      return board;
    }
    return board.map((square, squareIndex) => {
      if (squareIndex !== action.squareIndex) {
        return square;
      }

      return {
        ...square,
        ...action.item
      };
    });
  });
}
