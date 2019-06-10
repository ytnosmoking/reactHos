import React from "react";

import { connect } from "react-redux";
import { Layout, Menu, Spin, Icon } from "antd";
import ReactSVG from "react-svg";
import { svgSrc } from "./utils/tools";

import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
import { baseRoutes, infoRoutes } from "./routers";
import Wrapper from "./AppStyle";
import CommonHead from "./components/head";
import Loading from "./components/Loading";
const { Content, Sider } = Layout;

function App(props) {
  let { token, loading, location } = props;
  const { pathname } = location;
  console.log(location);
  console.log(pathname);
  // console.log(props);
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
            <Sider className="sidebar">
              <Menu
                mode="inline"
                // defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
              >
                {infoRoutes.map(route => (
                  <Menu.Item key={route.to}>
                    <Link to={route.to}>
                      <ReactSVG src={svgSrc(route.meta.icon)} />
                      <br />
                      {route.to}
                      {route.meta.title}
                    </Link>
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
              <Loading />
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
)(withRouter(App));
