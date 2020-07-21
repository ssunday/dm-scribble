import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NewCampaign } from './NewCampaign';
import { ShowCampaign } from './ShowCampaign';
import { IndexCampaign } from './IndexCampaign';
import { CampaignLayout } from './CampaignLayout';

export const CampaignRoutes = (): JSX.Element => {
  return (
    <Switch>
      <CampaignLayout>
        <Route exact path="/campaigns" component={IndexCampaign} />
        <Switch>
          <Route exact path="/campaigns/new" component={NewCampaign} />
          <Route path="/campaigns/:id" component={ShowCampaign} />
        </Switch>
      </CampaignLayout>
    </Switch>
  );
};
