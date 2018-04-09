import React from 'react';

function NumberList (props) {

    console.log(props);

    const generateList = props.guesses.map((number, index) => {
        return (
            <li key={index} className="App__guessNumber__list__number">{number}</li>
        )
    })

    return (
        <ul className="App__guessNumber__list">
            {generateList}
        </ul>
    )
}

export default NumberList;