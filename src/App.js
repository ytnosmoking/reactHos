import React from "react";

import Wrapper from "./AppStyle";
import CommonHead from "./components/head";
import { connect } from "react-redux";
// import { Layout, Spin, Icon } from "antd";
import { Layout } from "antd";

import SignIn from "./components/signIn.jsx";
import Enter from "./components/enter.jsx";
const { Content } = Layout;
// const antIcon = (
//   <Icon
//     type="loading"
//     style={{
//       fontSize: 24
//     }}
//     spin
//   />
// );

function App(props) {
  let { token } = props;
  console.log(props);
  return (
    <Wrapper>
      <Layout>
        <CommonHead />
        <Content
          style={{
            height: "calc(100% - 80px)"
          }}
        >
          {token ? <Enter /> : <SignIn />}
          {/* <Spin indicator={antIcon} tip="加载中" /> */}

          {/* <Spin spinning={true}>this is Content </Spin>{" "} */}
        </Content>{" "}
      </Layout>{" "}
    </Wrapper>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Wrapper>
//         <Layout>
//           <CommonHead />
//           <Content>this is Content </Content>{" "}
//         </Layout>
//       </Wrapper>
//     );
//   }
// }

const mapStateToProps = state => ({
  token: state.base.token
});

export default connect(
  mapStateToProps,
  null
)(App);
