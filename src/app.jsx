import React, { Component } from 'react';
// import { render } from 'react-dom';
// const { useState } = React;
import Board from './container/board.jsx';

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default App;