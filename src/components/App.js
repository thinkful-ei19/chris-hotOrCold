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

    let randomNumber = Math.round((Math.random())*100)
    console.log(randomNumber);
    this.state = { 
      answer: randomNumber,
      guesses: []
    }

  }

  guessIt(number) {
    console.log(this.state.answer);
    const correctNumber = this.state.answer;
    let marginError = number - correctNumber;
    //Make positive to compare
    if (marginError < 0) {
      marginError = (marginError * -1);
    }
    console.log(marginError);
    // if (parseInt(number) == parseInt(this.state.answer)) {
    //   alert('You guessed correctly!')
    // } else {
    //   this.state.guesses.push(number);
    //   alert('Try again!')
    // }
    
    //If within 10 numbers
    if (marginError <= 10 && marginError !== 0) {
      alert('Hot')
    }
    //If within 20 numbers
    else if (marginError <= 20 && marginError >= 11) {
      alert('Warm')
    }
    //Else if it matches
    else if (marginError === 0) {
      alert('Correct!')
    }
    //Else...
    else {
      alert('Cold')
    }
  }
  
  render() {
    const guessNumber = (number) => {
      this.guessIt(number);
    }

    return (
      <div className="App">
        <nav className="nav">
          <NavList />
        </nav>
        <div className="App__main container">
          <h1>Hot or Cold</h1>
          <Feedback />
          <AppForm handleNumberSubmit={guessNumber} />
          <GuessNumber />
          <NumberList />
        </div>
      </div>
    );
  }
}

export default App;
