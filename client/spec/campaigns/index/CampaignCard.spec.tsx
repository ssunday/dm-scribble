import React from 'react';
import { render, screen } from '@testing-library/react';
import { CampaignCard } from '../../../src/campaigns/index/CampaignCard';
import { wrapWithBasicRouter } from '../../support/RenderHelpers';

describe('CampaignCard', (): void => {
  const campaign = { id: '1123-3444', name: 'Campaign' };

  it('shows the campaign name but not the ID', (): void => {
    render(wrapWithBasicRouter(<CampaignCard campaign={campaign} />));

    expect(screen.getByText(campaign.name)).toBeDefined();
    expect(screen.queryByText(campaign.id)).toBeNull();
  });

  it('shows description if present', (): void => {
    render(
      wrapWithBasicRouter(
        <CampaignCard campaign={{ ...campaign, description: 'foobar' }} />
      )
    );

    expect(screen.getByText('foobar')).toBeDefined();
  });
});
