import { Component } from "react";

class RP2 extends Component {
  state = {
    data2: "salute"
  };

  func2 = (args1, args2) => {
    return args1 - args2;
  };

  render() {
    return this.props.children({
      data2: this.state.data2,
      func2: this.func2
    });
  }
}

export { RP2 };
