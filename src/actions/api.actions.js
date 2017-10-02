
export function playSquare(squarePlay, boardPlay, player) {
  return {
    type: 'PLAY_SQUARE',
    squarePlay,
    boardPlay,
    player
  };
}
