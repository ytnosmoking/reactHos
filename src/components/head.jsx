import React, { Component } from "react";

import { Layout } from "antd";
import { connect } from "react-redux";

import { changeToken } from "../store/actions";
const { Header } = Layout;

class head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { token, doctorInfo, change } = this.props;
    console.log(token);
    console.log(doctorInfo);
    console.log(changeToken);
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
                    : "./static/img/userIcon.png"
                }
                alt="img"
              />
              &nbsp; {this.doctorInfo ? this.doctorInfo.name : ""}
            </span>
            &nbsp; &nbsp;
            <span className="headerExit" onClick={() => change(token)}>
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
  change: token => dispatch(changeToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(head);

// export default head;
