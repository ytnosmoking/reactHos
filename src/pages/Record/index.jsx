import React, { Component } from "react";

import Wrapper from "./style";
import Li from "./Li";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arr = new Array(20).fill(1);
    return (
      <Wrapper>
        <ul>
          {arr.map((item, index) => (
            <Li key={index}>
              {index}-{item}
            </Li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default index;
