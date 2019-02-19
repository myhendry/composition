import React, { Component } from "react";

const Context3 = React.createContext("english");

// const Context3Provider = Context3.Provider;
export const Context3Consumer = Context3.Consumer;

// the HOC
// export const withContext2 = Comp => props => (
//     <Context2.Consumer>
//       {stuff => <Comp stuff={stuff} {...props} />}
//     </Context2.Consumer>
//   );

// Render Props
export class RPContext3 extends Component {
  state = {
    lastName: "Terry"
  };

  render() {
    return (
      <Context3Consumer>
        {res => {
          return this.props.children({
            res,
            lastName: this.state.lastName
          });
        }}
      </Context3Consumer>
    );
  }
}
