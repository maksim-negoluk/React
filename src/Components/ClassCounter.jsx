import React from "react";

class ClassCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increase = () => {
        this.setState({counter: this.state.counter + 1})
    }

    decrease = () => {
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        return(
            <div>
                <div>{this.state.counter}</div>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease}>decrease</button>
            </div>
        )
    }
}

export default ClassCounter