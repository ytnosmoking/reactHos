import React, { Component } from "react";

import { Layout } from "antd";
import { connect } from "react-redux";

import { triggerExit } from "../store/actions";
const { Header } = Layout;

class head extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { token, doctorInfo, change } = this.props;

    console.log(doctorInfo);

    return (
      <Header className={token ? "active" : ""}>
        <span onClick={() => change(token)}>好快云药店-问诊医师工作平台</span>
        {token ? (
          <div className="headerInfo">
            <span>
              <img
                src={
                  this.doctorInfo
                    ? this.doctorInfo.avatar
                    : require("../assets/img/logo.png")
                }
                alt="avatar"
              />
              &nbsp; {this.doctorInfo ? this.doctorInfo.name : ""}
            </span>
            &nbsp; &nbsp;
            <span className="headerExit" onClick={() => change(false)}>
              退出系统
            </span>
          </div>
        ) : (
          ""
        )}
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  token: state.base.token,
  doctorInfo: state.base.doctorInfo
});
const mapDispatchToProps = dispatch => ({
  change: token => dispatch(triggerExit(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(head);

// export default head;
