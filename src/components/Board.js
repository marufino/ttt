import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.sass';
import Square from './Square';

const Board = ({ squares, squareIndex, inactive, onClick }) => (
  <div>
    { squares.map((square, index) => (
      <Square
        key={`${index}${squareIndex}`}
        value={square.value}
        inactive={square.inactive}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
  );

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  squareIndex: PropTypes.number,
  inactive: PropTypes.bool,
  onClick: PropTypes.func
};

export default Board;
