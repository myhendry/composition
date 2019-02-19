import React, { Component } from "react";
import { withContext2 } from "./Context2";
import { Context1Container } from "./Context1";
import { RPContext3 } from "./Context3";

class Component3Container extends Component {
  componentDidMount() {
    console.log("@cdm component3 props", this.props);
  }
  render() {
    return (
      <div>
        <Context1Container />
        <h4>Hot! {this.props.stuff}</h4>
        <RPContext3>
          {res => {
            console.log("@c3 res props ", res);
            return <div>Using context 3</div>;
          }}
        </RPContext3>
      </div>
    );
  }
}

const Component3 = withContext2(Component3Container);

export { Component3 };

// https://medium.com/workshop-me/render-props-react-createcontext-but-how-9c8e457a90e3
