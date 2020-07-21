import React from 'react';
import { Link } from 'react-router-dom';
import { CampaignCard } from './index/CampaignCard';
import { Campaign } from './Campaign';
import { getCampaigns } from './CampaignService';
import { newCampaign } from './CampaignPaths';

export const IndexCampaign = (): JSX.Element => {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>([]);

  const fetchCampaigns = async (): Promise<void> => {
    const result = await getCampaigns();
    setCampaigns(result);
  };

  React.useEffect((): void => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Your Campaigns</h2>
      <Link to={newCampaign()}>New Campaign</Link>
      <div className="card__grid">
        {campaigns.map((campaign) => (
          <CampaignCard campaign={campaign} key={campaign.id} />
        ))}
      </div>
    </div>
  );
};
