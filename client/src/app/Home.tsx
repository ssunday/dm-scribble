import React from 'react';
import { Link } from 'react-router-dom';
import { indexCampaign } from '../campaigns/CampaignPaths';

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1>DND Scrawl</h1>
      <p>
        App to hold DND campaign notes. Just something to build and play with.
      </p>
      <Link className="button" to={indexCampaign()}>
        Your Campaigns
      </Link>
    </div>
  );
};
