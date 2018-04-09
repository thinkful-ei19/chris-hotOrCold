import React from 'react';

class AppForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: null
        }
    }

    render() {
        return (
            <form 
            onSubmit={event => {
                event.preventDefault();
                this.submitNumber()
                }
            }
             className="App__form">
                <input 
                onChange={event => this.onInputChange(event.target.value)}
                className="App__input" />
                <button className="App__submitButton">Submit</button>
            </form>
        )
    }
    onInputChange(number) {
        this.setState({number})
    }

    submitNumber() {
        this.props.handleNumberSubmit(this.state.number)
    }
}

export default AppForm;