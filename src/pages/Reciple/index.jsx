import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arr = new Array(20);
    return (
      <div>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{index}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default index;
