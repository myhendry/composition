import React from "react";

class Wrapper2 extends React.Component {
  state = {
    value: 0
  };

  // Increase count
  incrementValue = () => {
    const { value } = this.state;
    return this.setState({ value: value + 1 });
  };

  // Decrease count
  decrementValue = () => {
    const { value } = this.state;
    return this.setState({ value: value - 1 });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        {this.props.render({
          incrementValue: this.incrementValue,
          decrementValue: this.decrementValue,
          value: value
        })}
      </div>
    );
  }
}

export { Wrapper2 };
