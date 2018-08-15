import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.count };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={this.handleClick}> +-</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
};

export default Counter;
