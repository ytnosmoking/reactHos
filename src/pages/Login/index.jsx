import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Spin } from "antd";

import Logo from "../../assets/img/logo.png";
import Wrapper from "./style";
import { changeToken } from "../../store/actions";
import { connect } from "react-redux";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.change(true);
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Spin
            tip="加载中"
            indicator={antIcon}
            size="large"
            spinning={false}
          />
          <img src={Logo} alt="logo" />
          <Form.Item>
            {getFieldDecorator("username", {
              initialValue: "hkydc001",
              rules: [{ required: true, message: "输入用户名字" }]
            })(<Input placeholder="Username" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(<Input type="password" placeholder="Password" />)}
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  change: token => dispatch(changeToken(token))
});
const signIn = Form.create({ name: "normal_login" })(loginForm);
export default connect(
  null,
  mapDispatchToProps
)(signIn);
