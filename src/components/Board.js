import React from 'react';
import PropTypes from 'prop-types';
import '../sass/main.sass';
import Square from './Square';

const Board = ({ squares, squareIndex, inactive, onClick }) => (
  <div className="board">
    <div className="column">
      <div className="row">
        <Square
          key="square0"
          value={squares[0].value}
          inactive={squares[0].inactive}
          onClick={() => onClick(0)}
        />
        <Square
          key="square1"
          value={squares[1].value}
          inactive={squares[1].inactive}
          onClick={() => onClick(1)}
        />
        <Square
          key="square2"
          value={squares[2].value}
          inactive={squares[2].inactive}
          onClick={() => onClick(2)}
        />
      </div>
      <div className="row">
        <Square
          key="square3"
          value={squares[3].value}
          inactive={squares[3].inactive}
          onClick={() => onClick(3)}
        />
        <Square
          key="square4"
          value={squares[4].value}
          inactive={squares[4].inactive}
          onClick={() => onClick(4)}
        />
        <Square
          key="square5"
          value={squares[5].value}
          inactive={squares[5].inactive}
          onClick={() => onClick(5)}
        />
      </div>
      <div className="row">
        <Square
          key="square6"
          value={squares[6].value}
          inactive={squares[6].inactive}
          onClick={() => onClick(6)}
        />
        <Square
          key="square7"
          value={squares[7].value}
          inactive={squares[7].inactive}
          onClick={() => onClick(7)}
        />
        <Square
          key="square8"
          value={squares[8].value}
          inactive={squares[8].inactive}
          onClick={() => onClick(8)}
        />
      </div>
    </div>
  </div>
  );

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  squareIndex: PropTypes.number,
  inactive: PropTypes.bool,
  onClick: PropTypes.func
};

export default Board;
