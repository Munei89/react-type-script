import React from 'react';
import { Layout, Menu } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
  param1: string;
};

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
  someString?: string;
};

class Sidebar extends React.Component<PropsType> {
  state = {
    collapsed: false
  };
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <h2>
            Bank<strong>Now</strong>
          </h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/dashboard">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="/reports">
            <NavLink to="/reports">Reports</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
