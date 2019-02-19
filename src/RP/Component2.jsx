import React, { Fragment } from "react";
import { adopt } from "react-adopt";

//! Using react-powerplug - OK
// import { Value } from "react-powerplug";

// const Composed = adopt({
//   greet: <Value initial="Hello" />,
//   name: <Value initial="John" />
// });

//! Using render props render method - OK
// import { Wrapper1 } from "../RP/Wrapper1";
// import { Wrapper2 } from "../RP/Wrapper2";

// const Composed = adopt({
//   wrapper1: ({ render }) => <Wrapper1 render={render} />,
//   wrapper2: ({ render }) => <Wrapper2 render={render} />
// });

//! Using custom render this.props - OK
import { RP1 } from "./RP1";
import { RP2 } from "./RP2";

const Composed = adopt({
  custom1: <RP1 />,
  custom2: <RP2 />
});

const Component2 = () => {
  return (
    <Fragment>
      <p>USING RENDER PROPS AND REACT ADOPT </p>
      <Composed>
        {props => {
          // console.log(props);
          return <div>test</div>;
        }}
      </Composed>
      {/* <Composed>
        {({ greet, name }) => (
          <div>
            {greet.value} {name.value}
          </div>
        )} */}
      {/* <Wrapper
        render={({ increment, count }) => (
          <div>
            <p>{count}</p>
            <button onClick={() => increment()}>Increment</button>
          </div>
        )}
      /> */}
    </Fragment>
  );
};

export { Component2 };
