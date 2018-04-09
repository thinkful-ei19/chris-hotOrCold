import React from 'react';

function Feedback (props) {
    return (
        <p className="App__feedback">{props.status}</p>
    )
}

export default Feedback;