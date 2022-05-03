import React from 'react';

class ClassInputField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    setTextField = (text) => {
        this.setState({input: text})
    }

    render() {
        return(
            <div>
                <p>{this.state.input}</p>
                <input type="text" onChange={event => this.setTextField(event.target.value)}/>
            </div>
        )
    }
}

export default ClassInputField;