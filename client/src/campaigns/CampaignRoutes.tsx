import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NewCampaign } from './NewCampaign';
import { ShowCampaign } from './ShowCampaign';
import { EditCampaign } from './EditCampaign';
import { IndexCampaign } from './IndexCampaign';
import { CampaignLayout } from './CampaignLayout';
import { PlayerCharacterRoutes } from '../playerCharacters/PlayerCharacterRoutes';

export const CampaignRoutes = (): JSX.Element => {
  return (
    <Switch>
      <CampaignLayout>
        <Route exact path="/campaigns" component={IndexCampaign} />
        <Switch>
          <Route exact path="/campaigns/new" component={NewCampaign} />
          <Route exact path="/campaigns/:id/edit" component={EditCampaign} />
          <Route
            path="/campaigns/:campaignId/player_characters"
            component={PlayerCharacterRoutes}
          />
          <Route path="/campaigns/:id" component={ShowCampaign} />
        </Switch>
      </CampaignLayout>
    </Switch>
  );
};
