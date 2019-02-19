import React, { Component, Fragment } from "react";

import { Component1 } from "./HOC/Component1";
import { Component2 } from "./RP/Component2";
import { Parent } from "./Context/Parent";
import { ThemeStore } from "./Context/ContextTypes/ThemeContext";
import { LanguageContext } from "./Context/ContextTypes/LanguageContext";
import { StatusContext } from "./Context/ContextTypes/StatusContext";

// B2. Wrap Parent Component up the Component Tree with LanguageContext
// A3. Wrap Parent Component up the Component Tree with ThemeStore
class App extends Component {
  state = {
    status: false
  };

  toggleStatus = () => {
    this.setState(prevState => ({
      status: !prevState.status
    }));
  };

  render() {
    return (
      <Fragment>
        <Component1 />
        <Component2 />
        <StatusContext.Provider
          value={{ ...this.state, toggleStatus: this.toggleStatus }}
        >
          <ThemeStore>
            <LanguageContext.Provider value="red">
              <Parent />
            </LanguageContext.Provider>
          </ThemeStore>
        </StatusContext.Provider>
      </Fragment>
    );
  }
}

export default App;
