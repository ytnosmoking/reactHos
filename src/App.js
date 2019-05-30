import React from "react";

import Wrapper from "./AppStyle";
import CommonHead from "./components/head";
import { connect } from "react-redux";
import { Layout, Menu, Spin } from "antd";

import { baseRoutes, infoRoutes } from "./routers";

import { Switch, Route, Redirect, Link } from "react-router-dom";
const { Content, Sider } = Layout;

function App(props) {
  let { token, loading } = props;
  console.log(props);
  const routes = token ? infoRoutes : baseRoutes;
  const redirect = token ? "/record" : "/login";
  return (
    <Wrapper>
      <Layout>
        <CommonHead />
        <Layout
          style={{
            height: "calc(100% - 80px)"
          }}
        >
          {token ? (
            <Sider>
              <Menu mode="inline" theme="dark">
                {infoRoutes.map(route => (
                  <Menu.Item key={route.name}>
                    <Link to={route.to}> {route.meta.title} </Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
          ) : (
            ""
          )}
          <Content
            style={{
              height: "100% "
            }}
          >
            {loading ? (
              <Spin />
            ) : (
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.name}
                    path={route.to}
                    component={route.components}
                  />
                ))}
                <Redirect to={redirect} />
              </Switch>
            )}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
}
// (
//   <Route path="/record" component={Enter} />
// ) : (
//   <Route path="/login" component={SignIn} />
// )
const mapStateToProps = state => ({
  token: state.base.token,
  loading: state.base.loading
});

export default connect(
  mapStateToProps,
  null
)(App);
