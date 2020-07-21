import React from 'react';
import { render } from '@testing-library/react';
import { CampaignCard } from '../../../src/campaigns/index/CampaignCard';
import { wrapWithBasicRouter } from '../../support/RenderHelpers';

describe('CampaignCard', (): void => {
  const campaign = { id: '1123-3444', name: 'Campaign' };

  it('shows the campaign name but not the ID', (): void => {
    const { getByText, queryByText } = render(
      wrapWithBasicRouter(<CampaignCard campaign={campaign} />)
    );

    expect(getByText(campaign.name)).toBeDefined();
    expect(queryByText(campaign.id)).toBeNull();
  });
});
