import React from "react";
import Loadable from "react-loadable";

import { Spin } from "antd";

import Wrapper from "./style";
const loading = () => (
  <Wrapper>
    <Spin />
  </Wrapper>
);
export default options => {
  return Loadable({
    ...options,
    loading,
    delay: 3000
  });
};
