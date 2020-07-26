import * as React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Campaign } from './Campaign';
import { getCampaign, updateCampaign } from './CampaignService';
import { CampaignForm } from './shared/CampaignForm';
import { LoadingSpinner } from '../components/LoadingSpinner';
import * as Page from '../components/Page';
import { showCampaign } from './CampaignPaths';
import { ErrorNotice } from '../form/ErrorNotice';

export const EditCampaign = (): JSX.Element => {
  const { id } = useParams();
  const history = useHistory();

  const [campaign, setCampaign] = React.useState<Campaign | undefined>(
    undefined
  );
  const [error, setError] = React.useState<string | undefined>();

  const fetchCampaign = async (): Promise<void> => {
    const result = await getCampaign(id);
    setCampaign(result);
  };

  const saveCampaign = async (): Promise<void> => {
    if (id && campaign) {
      const result = await updateCampaign(id, campaign);
      if (result) {
        setError(result.error || 'Something went wrong');
      } else {
        history.push(showCampaign(id));
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
        <ErrorNotice error={error} />
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
