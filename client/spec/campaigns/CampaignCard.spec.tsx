import React from 'react';
import { render } from '@testing-library/react';
import { CampaignCard } from '../../src/campaigns/CampaignCard';
import { Campaign } from '../../src/campaigns/Campaign';

describe('CampaignCard', (): void => {
  const campaign: Campaign = { id: '1123-3444', name: 'Campaign' };

  it('shows the campaign name but not the ID', (): void => {
    const { getByText, queryByText } = render(
      <CampaignCard campaign={campaign} />
    );

    expect(getByText(campaign.name)).toBeDefined();
    expect(queryByText(campaign.id)).toBeNull();
  });
});
