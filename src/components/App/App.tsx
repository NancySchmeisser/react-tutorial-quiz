import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Quiz from '../Quiz/Quiz';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Quiz />
      </div>
    );
  }
}

export default App;
