import React, { Component } from 'react';
import { render } from 'react-dom';
import Box from './box.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';


const mapStateToProps = state => ({
  markers : state.game.markers,
});
const mapDispatchToProps = dispatch => ({
  clickBox : (boxId) => dispatch(actions.clickBoxActionCreator(boxId))
});

// create row component
class Row extends Component {
  render() {
    const boxes = [];
    for (let i = 0; i < 3; i++) {
      const boxNum = this.props.rowNum * 3 + i;
      boxes.push(<Box key={`Box${boxNum}`} boxNum={boxNum} marker={this.props.markers[boxNum]} clickBox={this.props.clickBox} />);
    }
    return (
      <div className="row">
        {boxes}
      </div>
    );
  }
}

// const Row = props => {
//   const boxes = [];
//   for(let i = 0; i < 3; i++){
//     boxes.push(<Box id={(props.id*3) + i} marker={props.markers}  update={props.update}/>)
//   }
//   return  <div>{boxes}</div>;
// };

export default connect(mapStateToProps, mapDispatchToProps)(Row);
