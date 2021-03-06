import React from 'react';
import { Campaign } from '../Campaign';
import { showCampaign } from '../CampaignPaths';
import { Link } from 'react-router-dom';

export const CampaignCard = ({
  campaign,
}: {
  campaign: Campaign;
}): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card__title">
        <Link to={showCampaign(campaign.id)}>{campaign.name}</Link>
      </h3>
      <p>{campaign.description}</p>
    </div>
  );
};
