import React from 'react';

function GuessNumber (props) {
    console.log(props);
    return (
        <p className="App__guessNumber">Guess Number: {props.guesses.length}</p>
    )
}

export default GuessNumber;