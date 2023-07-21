import React, { Component } from "react";

export class ClassComponent extends Component {
  state = {
    message: "class component",
    time: new Date().toString(),
  };

  componentDidMount() {
    console.log("component did mount");
    this.interval = setInterval(this.showDate, 1000);
  }
  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component cleard");
    clearInterval(this.interval);
  }

  showDate = () => {
    this.setState({ time: new Date().toString() });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default ClassComponent;
