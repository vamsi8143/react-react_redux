import React, { Component } from "react";
import { contextProvider } from "./UseContextHook";

export class UseContextClass extends Component {
  // const provideConsume = contextProvider;
  render() {
    return (
      <contextProvider.Consumer>
        <h1>class component: {this.props.counter}</h1>
      </contextProvider.Consumer>
    );
  }
}

export default UseContextClass;
