import React, { Component, lazy, Suspense } from "react";
const ControlledC = lazy(() => import("./ControlledC"));
const UncontrolledComponentC = lazy(() => import("./UncontrolledComponentC"));

export default class LazyLoadingC extends Component {
  render() {
    return (
      <>
        <div>LazyLoadingC</div>
        <Suspense
          fallback={<div>please wait controlled component is loading...</div>}
        >
          <ControlledC />
        </Suspense>
        <Suspense
          fallback={
            <div>please wait un-controlled component is loading...</div>
          }
        >
          <UncontrolledComponentC />
        </Suspense>
      </>
    );
  }
}
