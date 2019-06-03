import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const wrapper = {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return <div style={wrapper}>数据加载中...</div>;
  }
}

export default Loading;
