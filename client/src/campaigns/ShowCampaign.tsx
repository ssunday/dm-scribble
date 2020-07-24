import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Campaign } from './Campaign';
import { getCampaign } from './CampaignService';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { IndexPlayerCharacter } from '../playerCharacters/IndexPlayerCharacter';
import { editCampaign } from './CampaignPaths';

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
        <Link to={editCampaign(campaign.id)}>Edit</Link>

        <IndexPlayerCharacter campaignId={campaign.id} />
      </div>
    );
  }

  return <LoadingSpinner />;
};
