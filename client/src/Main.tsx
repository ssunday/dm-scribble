import React from 'react';
import { CampaignList } from './campaigns/CampaignList';

export const Main = (): JSX.Element => {
  return (
    <div>
      <h1>D&D Scrawl</h1>
      <p>Notes and stuff</p>
      <CampaignList />
    </div>
  );
};
