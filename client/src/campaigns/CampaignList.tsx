import React from 'react';
import { CampaignCard } from './CampaignCard';
import { Campaign } from './Campaign';

export const CampaignList = (): JSX.Element => {
  const [campaigns] = React.useState<Campaign[]>([]);

  return (
    <div>
      <h2>Your Campaigns</h2>
      {campaigns.map((campaign, i) => (
        <CampaignCard campaign={campaign} key={i} />
      ))}
    </div>
  );
};
