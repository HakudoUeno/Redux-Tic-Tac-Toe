import * as types from '../constants/actionTypes.js';

const initialState = {
  markers: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
  turn: 'X',
  winner: null
};

const gameReducer = (state = initialState, action) => {
  switch (action.type){
  case types.clickBox: {
    // update board
    const markers = markers.slice();
    markers[action.payload] = state.turn;
    let turn = state.turn;
    let winner = state.winner;

    // check for win
    const row = Math.floor(action.payload / 3);
    // check columns
    if (turn === markers[(action.payload + 3) % 9] && turn === markers[(action.payload + 6) % 9]) winner = turn;
    // check rows
    if (turn === markers[row * 3] && turn === markers[row * 3 + 1] && turn === markers[row * 3 + 2]) winner = turn;
    // check diagonals
    if (markers[0] === markers[4] && markers[0] === markers[8] && markers[0] !== '-') winner = turn;
    if (markers[2] === markers[4] && markers[2] === markers[6] && markers[2] !== '-') winner = turn;

    // change turn
    turn = turn === 'X' ? 'O' : 'X';

    return {
      ...state,
      markers,
      turn,
      winner
    }
  }
  default: 
    return state;
  }
};

export default gameReducer;