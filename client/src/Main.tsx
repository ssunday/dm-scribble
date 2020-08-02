import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { CampaignRoutes } from './campaigns/CampaignRoutes';
import { Home } from './app/Home';
import { NotFound } from './app/NotFound';
import Layout from './app/Layout';

import './assets/stylesheets/main.scss';

const Main = (): JSX.Element => {
  return (
    <Router history={createBrowserHistory()}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Route path="/campaigns" component={CampaignRoutes} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default withAuthenticator(Main);
