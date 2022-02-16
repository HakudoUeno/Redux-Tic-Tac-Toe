import React, { Component } from 'react';

const Box = props => (
  <button id={props.boxNum} className={props.marker} style={{height: '100px', width:'100px'}} onClick={() => props.clickBox(props.boxNum)}>{props.marker}</button>
);


export default Box;