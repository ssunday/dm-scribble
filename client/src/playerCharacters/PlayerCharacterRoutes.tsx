import * as React from 'react';
import { Route, Switch } from 'react-router';
import { NewPlayerCharacter } from './NewPlayerCharacter';
import { ShowPlayerCharacter } from './ShowPlayerCharacter';
import { EditPlayerCharacter } from './EditPlayerCharacter';

export const PlayerCharacterRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path="/campaigns/:campaignId/player_characters/new"
        component={NewPlayerCharacter}
      />
      <Route
        exact
        path="/campaigns/:campaignId/player_characters/:id/edit"
        component={EditPlayerCharacter}
      />
      <Route
        path="/campaigns/:campaignId/player_characters/:id"
        component={ShowPlayerCharacter}
      />
    </Switch>
  );
};
