import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Campaign } from './Campaign';
import { createCampaign } from './CampaignService';
import { indexCampaign } from './CampaignPaths';
import { CampaignForm } from './shared/CampaignForm';
import { ErrorNotice } from '../form/ErrorNotice';

export const NewCampaign = (): JSX.Element => {
  const history = useHistory();
  const [campaign, setCampaign] = React.useState<Partial<Campaign>>({
    name: '',
  });

  const [error, setError] = React.useState<string | undefined>(undefined);

  const saveCampaign = async (): Promise<void> => {
    const result = await createCampaign(campaign);
    if (result.id) {
      history.push(indexCampaign());
    } else {
      setError(result.error || 'Something went wrong');
    }
  };

  return (
    <div>
      <h1>New Campaign</h1>

      <ErrorNotice error={error} />

      <CampaignForm
        campaign={campaign}
        onChange={(c) => setCampaign(c)}
        onSave={saveCampaign}
      />
    </div>
  );
};
