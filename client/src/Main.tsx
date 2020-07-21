import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { CampaignRoutes } from './campaigns/CampaignRoutes';
import { Home } from './app/Home';
import { Layout } from './app/Layout';

import './assets/stylesheets/main.scss';

export const Main = (): JSX.Element => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/campaigns" component={CampaignRoutes} />
        </Layout>
      </Switch>
    </Router>
  );
};
