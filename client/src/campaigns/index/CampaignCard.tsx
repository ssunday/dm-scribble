import React from 'react';
import { Campaign } from '../Campaign';
import { show as showCampaign } from '../CampaignPaths';
import { Link } from 'react-router-dom';

export const CampaignCard = ({
  campaign,
}: {
  campaign: Campaign;
}): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card__title">{campaign.name}</h3>
      <Link to={showCampaign(campaign.id)}>View</Link>
    </div>
  );
};
