import React, { Fragment } from "react";
import { withHOC } from "./withHOC";

const C1 = props => {
  // console.log("@hoc props ", props);
  const res = props.func1(3, 2);

  return (
    <Fragment>
      <p>HOC</p>
      {res.toString()}
    </Fragment>
  );
};

const Component1 = withHOC(C1);
export { Component1 };
