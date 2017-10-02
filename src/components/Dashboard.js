import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apiActions from '../actions/api.actions';
import Board from './Board';

// name actions BLANK_PLAY
// reducer listens to plays to check if there's a winner
// reducer listens to plays to check which squares are invalid
// reducer listen to plays to change player back and forth (change cursor?)

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  playMade(index, squareIndex) {
    this.props.actions.playSquare(index, squareIndex, this.props.board.player);
    console.log(index);
    console.log(squareIndex);
  }

  render() {
    return (
      <div>
        { this.props.board.map((b, boardIdx) => (
          <Board
            squares={b}
            squareIndex={1}
            onClick={idx => this.playMade(idx, boardIdx)}
          />
        ))}
      </div>
    );
  }
}

Dashboard.propTypes = {
  board: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    board: state.api.board,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(apiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
