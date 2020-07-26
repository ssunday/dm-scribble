import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { CampaignRoutes } from './campaigns/CampaignRoutes';
import { Home } from './app/Home';
import { NotFound } from './app/NotFound';
import { Layout } from './app/Layout';

import './assets/stylesheets/main.scss';

export const Main = (): JSX.Element => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Route path="/campaigns" component={CampaignRoutes} />
          <Route exact path="/*" component={NotFound} />
        </Layout>
      </Switch>
    </Router>
  );
};
