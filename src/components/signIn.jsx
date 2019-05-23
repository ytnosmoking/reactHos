import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Spin } from "antd";

import Logo from "../assets/img/logo.png";
import Wrapper from "./signIn.js";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
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
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in1
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    );
  }
}
const signIn = Form.create({ name: "normal_login" })(loginForm);
export default signIn;
