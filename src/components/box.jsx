import React, { Component } from 'react';
import { render } from 'react-dom';
const { useState } = React;


// create box component
// class Box extends Component {
//   // render function to return html elements
//   render() {
//     return (
//       // update button to have its text reflect its state
//       // 1. set onClick 2. make text inside tags dependent on state of button
//       <button id={this.props.boxNum} onClick={this.props.state.handleClick} className="button">{this.props.state.selections[this.props.boxNum]}</button>
//     );
//   }
// }

const Box = props => (
  <button id={this.props.boxNum} onClick={this.props.state.handleClick} className="button">{this.props.state.selections[this.props.boxNum]}</button>
);


export default Box;