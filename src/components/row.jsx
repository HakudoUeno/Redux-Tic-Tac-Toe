import React, { Component } from 'react';
import { render } from 'react-dom';
const { useState } = React;
import Box from './box.jsx';

// create row component
class Row extends Component {
  render() {
    const boxes = [];
    for (let i = 0; i < 3; i++) {
      boxes.push(<Box key={`Box${this.props.rowNum * 3 + i}`} boxNum={this.props.rowNum * 3 + i} state={this.props.state} />);
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

export default Row;
