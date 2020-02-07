import React from 'react';
import './App.css';
import Smiley from './Smiley.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Smiley iconSmiley="./neutralFace.png" />
      </div>
    );
  }
}

export default App;
