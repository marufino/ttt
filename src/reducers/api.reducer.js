import initialState from './initialState';

export default function (state = initialState.api, action) {
  if (action.type === 'PLAY_SQUARE') {
    return {
      ...state,
      squarePlay: action.squarePlay,
      boardPlay: action.boardPlay,
      player: state.player === 'X' ? 'O' : 'X',
      board: updateObjectInArray(state.board, {
        squareIndex: action.squarePlay,
        boardIndex: action.boardPlay,
        item: {
          value: action.player,
          inactive: true
        }
      })
    };
  }

  return state;
}


function updateObjectInArray(boards, action) {
  console.log(action);
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
