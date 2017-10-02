import initialState from './initialState';

export default function (state = initialState.api, action) {
  if (action.type === 'PLAY_SQUARE') {
    return {
      ...state,
      squarePlay: action.squarePlay,
      boardPlay: action.boardPlay,
      player: state.player === 'X' ? 'O' : 'X',
      board: updateObjectInArray(state.board, {
        index: action.boardPlay,
        item: updateObjectInArray(state.board[action.boardPlay], {
          index: action.squarePlay,
          item: {
            value: state.player,
            inactive: true
          }
        })
      })
    };
  }

  return state;
}

function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        };
    });
}
