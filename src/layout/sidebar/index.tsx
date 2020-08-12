import React from 'react';
import { Menu } from 'antd';
import { ControlFilled, AreaChart } from '@ant-design/icons';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

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
      <Menu
        className="sidebar"
        defaultSelectedKeys={[location.pathname]}
        inlineCollapsed={collapsed}
        mode="inline"
      >
        <Menu.Item key="/dashboard" className="sidebar-first-item">
          <NavLink to="/dashboard">
            <ControlFilled />
            <span>Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/reports">
          <NavLink to="/reports">
            <AreaChart />
            <span>Reports</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Sidebar);
