import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Campaign } from './Campaign';
import { getCampaign } from './CampaignService';

export const ShowCampaign = (): JSX.Element => {
  const { id } = useParams();

  const [campaign, setCampaign] = React.useState<Campaign | undefined>(
    undefined
  );

  const fetchCampaign = async (): Promise<void> => {
    const result = await getCampaign(id);
    setCampaign(result);
  };

  React.useEffect(() => {
    fetchCampaign();
  }, [id]);

  if (campaign) {
    return (
      <div>
        <h1>{campaign.name}</h1>
      </div>
    );
  }

  return <div>Not Found</div>;
};
