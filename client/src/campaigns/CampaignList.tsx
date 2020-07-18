import React from 'react';
import { CampaignCard } from './CampaignCard';
import { Campaign } from './Campaign';
import { getCampaigns } from './CampaignService';

export const CampaignList = (): JSX.Element => {
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
      {campaigns.map((campaign) => (
        <CampaignCard campaign={campaign} key={campaign.id} />
      ))}
    </div>
  );
};
