import _ from 'lodash';
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

    this.state = { 
      answer: Math.round((Math.random())*100),
      guesses: [],
      status: 'Pick a number from 1 to 100'
    }

  }

  guessIt(number) {
    this.state.guesses.push(number);
    const correctNumber = this.state.answer;
    let marginError = number - correctNumber;
    //Make positive to compare
    if (marginError < 0) {
      marginError = (marginError * -1);
    }
    //If within 10 numbers
    if (marginError <= 10 && marginError !== 0) {
      this.setState({
        status: 'Hot'
      })
    }
    //If within 20 numbers
    else if (marginError <= 20 && marginError >= 11) {
      this.setState({
        status: 'Warm'
      })
    }
    //Else if it matches
    else if (marginError === 0) {
      this.setState({
        status: 'You guessed it!'
      })
    }
    //Else...
    else {
      this.setState({
        status: 'Cold'
      })
    }
    console.log(this.state)
  }
  
  render() {
    const guessNumber = (number) => {
      this.guessIt(number);
    }

    const newGame = () => {
      this.setState({
        answer: Math.round((Math.random())*100),
        guesses: [],
        status: 'Pick a number from 1 to 100'
      })
    }

    return (
      <div className="App">
        <nav className="nav">
          <NavList newGame={newGame}/>
        </nav>
        <div className="App__main container">
          <h1>Hot or Cold</h1>
          <Feedback status={this.state.status}/>
          <AppForm handleNumberSubmit={guessNumber}/>
          <GuessNumber guesses={this.state.guesses}/>
          <NumberList guesses={this.state.guesses}/>
        </div>
      </div>
    );
  }
}

export default App;
