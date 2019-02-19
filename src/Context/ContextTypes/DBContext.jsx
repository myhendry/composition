import React from "react";

// Refer to Child4 for DBContext.Consumer

export const DBContext = React.createContext();

export const withDBContext = WrappedComponent => {
  class _Context extends React.Component {
    state = {
      data: false
    };

    toggleData = () => {
      this.setState(prevState => ({
        data: !prevState.data
      }));
    };

    render() {
      return (
        <DBContext.Provider
          value={{ ...this.state, toggleData: this.toggleData }}
        >
          <WrappedComponent {...this.props} />
        </DBContext.Provider>
      );
    }
  }
  return _Context;
};
