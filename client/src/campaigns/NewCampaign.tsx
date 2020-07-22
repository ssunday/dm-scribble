import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Campaign } from './Campaign';
import { createCampaign } from './CampaignService';
import { index } from './CampaignPaths';
import { CampaignForm } from './shared/CampaignForm';

export const NewCampaign = (): JSX.Element => {
  const history = useHistory();
  const [campaign, setCampaign] = React.useState<Partial<Campaign>>({
    name: '',
  });

  const [error, setError] = React.useState<boolean>(false);

  const saveCampaign = async (): Promise<void> => {
    const result = await createCampaign(campaign);
    if (result) {
      history.push(index());
    } else {
      setError(result);
    }
  };

  return (
    <div>
      <h1>New Campaign</h1>

      {error && <p>Something went wrong</p>}

      <CampaignForm
        campaign={campaign}
        onChange={(c) => setCampaign(c)}
        onSave={saveCampaign}
      />
    </div>
  );
};
