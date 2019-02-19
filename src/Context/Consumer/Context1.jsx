import React from "react";

const Context1 = React.createContext("I am Context 1");

export const Context1Container = () => (
  <Context1.Consumer>{stuff => <MyContext1 stuff={stuff} />}</Context1.Consumer>
);

// receive it as a prop, viola! Context in your lifecycles.
class MyContext1 extends React.Component {
  componentDidMount() {
    console.log(this.props.stuff);
  }
  render() {
    return (
      <div>
        <h4>Cool! {this.props.stuff}</h4>
      </div>
    );
  }
}
