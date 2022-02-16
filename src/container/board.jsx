import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Row from '../components/row.jsx';

const mapStateToProps = state => ({
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  reset : () => dispatch(actions.resetBoxActionCreator())
});

// create board component
class Board extends Component {
  render() {
    // create rows with unique keys
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(<Row key={`Row${i}`} rowNum={i}/>);
    }
    return(
      <div id="board">
        {rows}
        {this.props.winner !== null && <p>{this.props.winner} wins!</p>}
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);