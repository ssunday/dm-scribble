import * as React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { Campaign } from './Campaign';
import { getCampaign, updateCampaign } from './CampaignService';
import { CampaignForm } from './shared/CampaignForm';
import { LoadingSpinner } from '../components/LoadingSpinner';
import * as Page from '../components/Page';
import { showCampaign } from './CampaignPaths';

export const EditCampaign = (): JSX.Element => {
  const { id } = useParams();
  const history = useHistory();

  const [campaign, setCampaign] = React.useState<Campaign | undefined>(
    undefined
  );
  const [error, setError] = React.useState<boolean>(false);

  const fetchCampaign = async (): Promise<void> => {
    const result = await getCampaign(id);
    setCampaign(result);
  };

  const saveCampaign = async (): Promise<void> => {
    if (id && campaign) {
      try {
        await updateCampaign(id, campaign);
        history.push(showCampaign(id));
      } catch (error) {
        setError(true);
      }
    }
  };

  React.useEffect(() => {
    fetchCampaign();
  }, [id]);

  if (campaign) {
    return (
      <div>
        <Page.Header>
          <h1>Editing Campaign</h1>
          <Link className="button button--gray" to={showCampaign(id)}>
            Cancel
          </Link>
        </Page.Header>
        {error && <p>Something went wrong</p>}
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
