import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apiActions from '../actions/api.actions';
import Board from './Board';
import '../sass/main.sass';

// TODO
// START CONDITION
// END GAME
// EMPHASIZE WINNER
// UI FOR PLAYER1 PLAYER2 - change cursor? bottom tab
// RESET BUTTON

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  playMade(index, squareIndex) {
    this.props.actions.playSquare(index, squareIndex, this.props.api.player);
    console.log(index);
    console.log(squareIndex);
  }

  render() {
    const { activeBoard, largeBoard } = this.props.api;
    return (
      <div className="column">
        <div className="row">
          <Board
            activeBoard={activeBoard === 0}
            squares={this.props.board[0]}
            squareIndex={0}
            onClick={idx => this.playMade(idx, 0)}
            boardWon={largeBoard[0]}
          />
          <Board
            activeBoard={activeBoard === 1}
            squares={this.props.board[1]}
            squareIndex={1}
            onClick={idx => this.playMade(idx, 1)}
            boardWon={largeBoard[1]}
          />
          <Board
            activeBoard={activeBoard === 2}
            squares={this.props.board[2]}
            squareIndex={2}
            onClick={idx => this.playMade(idx, 2)}
            boardWon={largeBoard[2]}
          />
        </div>
        <div className="row">
          <Board
            activeBoard={activeBoard === 3}
            squares={this.props.board[3]}
            squareIndex={3}
            onClick={idx => this.playMade(idx, 3)}
            boardWon={largeBoard[3]}
          />
          <Board
            activeBoard={activeBoard === 4}
            squares={this.props.board[4]}
            squareIndex={4}
            onClick={idx => this.playMade(idx, 4)}
            boardWon={largeBoard[4]}
          />
          <Board
            activeBoard={activeBoard === 5}
            squares={this.props.board[5]}
            squareIndex={5}
            onClick={idx => this.playMade(idx, 5)}
            boardWon={largeBoard[5]}
          />
        </div>
        <div className="row">
          <Board
            activeBoard={activeBoard === 6}
            squares={this.props.board[6]}
            squareIndex={6}
            onClick={idx => this.playMade(idx, 6)}
            boardWon={largeBoard[6]}
          />
          <Board
            activeBoard={activeBoard === 7}
            squares={this.props.board[7]}
            squareIndex={7}
            onClick={idx => this.playMade(idx, 7)}
            boardWon={largeBoard[7]}
          />
          <Board
            activeBoard={activeBoard === 8}
            squares={this.props.board[8]}
            squareIndex={8}
            onClick={idx => this.playMade(idx, 8)}
            boardWon={largeBoard[8]}
          />
        </div>
        <span>Player: {this.props.api.player}</span>
        <span>Winner: {this.props.api.winner}</span>
      </div>
    );
  }
}

Dashboard.propTypes = {
  board: PropTypes.array.isRequired,
  api: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    board: state.api.board,
    api: state.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(apiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
