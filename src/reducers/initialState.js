function createBoard() {
  const board = [];
  const squares = [];
  const square = {
    value: '',
    inactive: false,
    onClick: () => true
  };

  for (let i = 0; i < 9; i++) {
    squares.push(square);
  }

  for (let j = 0; j < 9; j++) {
    board.push(squares);
  }

  return board;
}

export default {
  api: {
    board: createBoard(),
    play: '',
    player: 'X'
  }
};
