import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Campaign } from './Campaign';
import { getCampaign, updateCampaign } from './CampaignService';
import { CampaignForm } from './shared/CampaignForm';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const EditCampaign = (): JSX.Element => {
  const { id } = useParams();

  const [campaign, setCampaign] = React.useState<Campaign | undefined>(
    undefined
  );

  const fetchCampaign = async (): Promise<void> => {
    const result = await getCampaign(id);
    setCampaign(result);
  };

  const saveCampaign = async (): Promise<void> => {
    if (id && campaign) {
      await updateCampaign(id, campaign);
    }
  };

  React.useEffect(() => {
    fetchCampaign();
  }, [id]);

  if (campaign) {
    return (
      <div>
        <h1>Editing Campaign</h1>
        <CampaignForm
          campaign={campaign}
          onChange={(c) => setCampaign(c as Campaign)}
          onSave={saveCampaign}
        />
      </div>
    );
  }

  return <LoadingSpinner />;
};
