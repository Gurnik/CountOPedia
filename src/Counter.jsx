import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    // Empty constructur produces an error --> must send props and call super(props)
    super(props);
    // In constructor we will define state, state is an object
    this.state = {
      count: 0,
    };
  }
  handleAttack() {
    alert("Attack clicked");
  }

  handleDefence() {
    alert("Defend clicked");
  }

  render() {
    return (
      <div className="row text-white">
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefence} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}
