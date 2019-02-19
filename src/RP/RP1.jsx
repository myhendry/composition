import { Component } from "react";

class RP1 extends Component {
  state = {
    data1: "received"
  };

  func1 = (args1, args2) => {
    return args1 * args2;
  };

  render() {
    return this.props.children({
      data1: this.state.data1,
      func1: this.func1
    });
  }
}

export { RP1 };
