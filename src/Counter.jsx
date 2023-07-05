import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    // Empty constructur produces an error --> must send props and call super(props)
    super(props);
    // In constructor we will define state, state is an object
    // In React (Class based) - State is IMMUTABLE - WE CANNOT MODIFY IT DIRECTLY
    this.handleAttack = this.handleAttack.bind(this); // BIND 'this' with this.handleAttack
    this.handleDefence = this.handleDefence.bind(this); // BIND 'this' with this.handleDefence
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }
  handleAttack = () => {
    // alert("Attack clicked");
    // this.state.count = 1; // EROR - STATE IS IMMUTIBLE - WE CANNOT MODIFY IT DIRECTLY
    // this.setState() - is Async Method
    // this.setState({ count: this.state.count + 1 }); // if 'this' of line 17 is not binded with this of onClick={this.handleAttack}, --> This 'this' is undifiened --> Error

    // NEW SYNTAX FOR setState
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10); // random number between 1 and 10

      return {
        count: newCount,
        lastPlay: "Attack",
        gameStatus: newCount > 10 ? "You Won!!" : previousState.gameStatus,
      };
    });

    /*
    // NEW SYNTAX FOR setState
    this.setState((previousState) => {
      return {
        count: previousState.count + 100,
      };
    });

    // NEW SYNTAX FOR setState
    this.setState((previousState) => {
      return {
        count: previousState.count + 10,
      };
    });
*/
    // this.setState({ count: this.state.count + 100 });
    // this.setState({ count: this.state.count + 10 });
  };

  handleDefence = () => {
    // alert("Defend clicked");
    // this.setState({ count: this.state.count - 1 }); // if 'this' of line 17 is not binded with this of onClick={this.handleDefence}, --> This 'this' is undifiened --> Error
    // NEW SYNTAX FOR setState
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10); // random number between 1 and 10

      return {
        count: newCount,
        lastPlay: "Defence",
        gameStatus: newCount < -10 ? "You Lost!!" : previousState.gameStatus,
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count} </h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <h3>Game Status : {this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>
        {/*<button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
          </-button>*/}
        <div className="col-6 col-md-3 md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          />
        </div>
        {/*<button onClick={this.handleDefence} style={{ width: "200px" }}>
          -1
          </button>*/}
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
