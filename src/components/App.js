import React, { Component } from 'react';
import logo from '../logo.svg';
import NumberList from './numberList';
import AppForm from './appForm';
import GuessNumber from './guessNumber';
import Feedback from './feedback';
import NavList from './navList';


class App extends Component {
  constructor(props) {
    super(props)

    let randomNumber = Math.round((Math.random())*100)
    console.log(randomNumber)

    let currentGuess;
    let guesses = [];

    this.state = { 
      answer: randomNumber,
      guesses: guesses
    }
  }

  render() {

    return (
      <div className="App">
        <nav className="nav">
          <NavList />
        </nav>
        <div className="App__main container">
          <h1>Hot or Cold</h1>
          <Feedback />
          <AppForm />
          <GuessNumber />
          <NumberList />
        </div>
      </div>
    );
  }
}

export default App;
