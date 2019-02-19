import React from "react";

const Context2 = React.createContext("I am Context 2");

// the HOC
export const withContext2 = Comp => props => (
  <Context2.Consumer>
    {stuff => <Comp stuff={stuff} {...props} />}
  </Context2.Consumer>
);

// The decorated class
// class SomethingImpl extends Component {
//   componentDidMount() {
//     console.log(this.props.stuff);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hot! {this.props.stuff}</h1>
//       </div>
//     );
//   }
// }
