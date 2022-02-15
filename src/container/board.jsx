import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Row from '../components/row.jsx';


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});



// create board component
class Board extends Component {
  render() {
    // create rows with unique keys
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(<Row key={`Row${i}`} rowNum={i} id={i} state={this.props.state} />);
    }
    return(
      <div id="board">
        {rows}
      </div>
    );
  }
}





export default Board;







// const Board = () => {
//   const[markers, updateMarks] = React.useState(['-', '-', '-', '-', '-', '-', '-', '-', '-',])
//   const[turn, updateTurn] = React.useState('X');
//   const[winnerFound, checkWinner] = React.useState(false);
//   const[winnerName, checkName] = React.useState('');

//   const update = ((e)=>{
//     const boxID = e.target.id;
//     const newMarkerArr = markers;
//     if (turn === 'X' && markers[boxID] === '-') {
//       newMarkerArr[boxID] = 'X';
//     } else if(turn === 'O' && markers[boxID] === '-'){
//       newMarkerArr[boxID] = 'O';
//     }
//     updateMarks(newMarkerArr);
    
//     if(!winnerFound){
//       if(markers[0] !== '-' && markers[0] === markers[3] && markers[3] === markers[6]) {checkWinner(true); checkName(turn);} //col1
//       else if(markers[1] !== '-' && markers[1] === markers[4] && markers[4] === markers[7]) {checkWinner(true); checkName(turn);} //col2
//       else if(markers[2] !== '-' && markers[2] === markers[5] && markers[5] === markers[8]) {checkWinner(true); checkName(turn);} //col3
//       else if(markers[0] !== '-' && markers[0] === markers[2] && markers[2] === markers[3]) {checkWinner(true); checkName(turn);} //row1
//       else if(markers[3] !== '-' && markers[3] === markers[4] && markers[4] === markers[5]) {checkWinner(true); checkName(turn);} //row2
//       else if(markers[6] !== '-' && markers[6] === markers[7] && markers[7] === markers[8]) {checkWinner(true); checkName(turn);} //row3
//       else if(markers[0] !== '-' && markers[0] === markers[4] && markers[4] === markers[8]) {checkWinner(true); checkName(turn);} //tLbR
//       else if(markers[2] !== '-' && markers[2] === markers[4] && markers[4] === markers[6]) {checkWinner(true); checkName(turn);} //tRbL
//     }
//     if (turn === 'X') {
//       updateTurn('O');
//     } else if(turn === 'O'){
//       updateTurn('X');
//     }
//     if(winnerFound)console.log('WINNER IS: ' , winnerName)
//   });

//   const rows = [];
//   for(let i = 0; i < 3; i++){
//     rows.push(<Row id={i} markers={markers} update={update}/>);//
//   }
//   return <div>{rows}</div>;
// };