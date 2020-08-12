import React, { Suspense } from 'react';
import Sidebar from '../layout/sidebar';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import MainHeader from '@layout/header';
import store, { history } from '../redux/store';

const Dashboard = React.lazy(() => import('../screens/dashboard/dashboard'));
const Reports = React.lazy(() => import('../screens/reports/reports'));
const { Content, Footer } = Layout;

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
            <Sidebar />
            <Layout className="layout">
              <MainHeader />
              <div className="container">
                <Content>{publicRoutes}</Content>
              </div>
              <Footer>
                <p>Copyright, All rights reserved. 2020</p>
              </Footer>
            </Layout>
          </Layout>
        </Suspense>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
