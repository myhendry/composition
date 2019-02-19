import React, { Component } from "react";

import { Child } from "./Child";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { Child4 } from "./Child4";
import { Component3 } from "./Consumer/Component3";

// A3. Wrap Child Component with ThemeStore
class Parent extends Component {
  render() {
    return (
      <div>
        <p>Parent rendering Child</p>
        - - - Multiple Render Props Context - - -
        <Child />
        - - - Using React-Adopt with Multiple Render Props Context - - -
        <Child2 />
        - - - HOC ContextProvider as Functional Component with Render Props
        ContextConsumer - - -
        <Child3 />
        - - - HOC ContextProvider as Class Component with Render Props
        ContextConsumer - - -
        <Child4 />
        - - - Different Ways of Consuming Context - - -
        <Component3 />
      </div>
    );
  }
}

export { Parent };
