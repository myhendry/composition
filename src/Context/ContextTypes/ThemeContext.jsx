import React from "react";

// Refer to Child 2 for ThemeContext.Consumer

//  A1. Create ThemeContext
export const ThemeContext = React.createContext();

// A2. Create ThemeStore and export
export class ThemeStore extends React.Component {
  state = {
    theme: "light"
  };

  _setDarkTheme = () => {
    this.setState({
      theme: "dark"
    });
  };

  _setLightTheme = () => {
    this.setState({
      theme: "light"
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          setDarkTheme: this._setDarkTheme,
          setLightTheme: this._setLightTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
