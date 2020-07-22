import React from 'react';
import { Link } from 'react-router-dom';
import { CampaignCard } from './index/CampaignCard';
import { Campaign } from './Campaign';
import { getCampaigns } from './CampaignService';
import { newCampaign } from './CampaignPaths';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const IndexCampaign = (): JSX.Element => {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchCampaigns = async (): Promise<void> => {
    const result = await getCampaigns();
    setCampaigns(result);
    setLoading(false);
  };

  React.useEffect((): void => {
    fetchCampaigns();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Your Campaigns</h1>
      <Link to={newCampaign()}>New Campaign</Link>
      <div className="card__grid">
        {campaigns.map((campaign) => (
          <CampaignCard campaign={campaign} key={campaign.id} />
        ))}
      </div>
    </div>
  );
};
