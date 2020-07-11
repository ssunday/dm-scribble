import React from 'react';
import { Campaign } from './Campaign';

export const CampaignCard = ({
  campaign,
}: {
  campaign: Campaign;
}): JSX.Element => {
  return (
    <div>
      <h3>{campaign.name}</h3>
    </div>
  );
};
