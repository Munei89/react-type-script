import React, { Suspense } from 'react';
import Sidebar from '../layout/sidebar';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Layout, Menu } from 'antd';
import store, { history } from '../redux/store';

const Dashboard = React.lazy(() => import('../screens/dashboard/dashboard'));
const Reports = React.lazy(() => import('../screens/reports/reports'));
const { Header, Content, Footer } = Layout;

const publicPaths = [
  { exact: true, path: '/', component: Dashboard },
  { exact: true, path: '/dashboard', component: Dashboard },
  { exact: true, path: '/reports', component: Reports }
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Suspense fallback={<div />}>
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Dashboard</Menu.Item>
                <Menu.Item key="2">Reports</Menu.Item>
              </Menu>
            </Header>
            <div className="container">
              <Sidebar />
              {publicRoutes}
            </div>
            {/* <Route component={NotFound} /> */}
          </Layout>
        </Suspense>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
