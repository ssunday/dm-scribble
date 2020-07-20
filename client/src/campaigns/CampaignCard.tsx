import React from 'react';
import { Campaign } from './Campaign';

export const CampaignCard = ({
  campaign,
}: {
  campaign: Campaign;
}): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card__title">{campaign.name}</h3>
    </div>
  );
};
