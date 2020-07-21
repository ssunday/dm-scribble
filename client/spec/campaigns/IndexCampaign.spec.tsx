import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { IndexCampaign } from '../../src/campaigns/IndexCampaign';
import { getCampaigns } from '../../src/campaigns/CampaignService';
import { wrapWithBasicRouter } from '../support/RenderHelpers';

jest.mock('../../src/campaigns/CampaignService');

describe('IndexCampaign', (): void => {
  const campaign1 = { id: '1123-3444', name: 'Campaign' };
  const campaign2 = { id: '2222', name: 'Foobar' };

  it('renders each campaign pulled from service', async (): Promise<void> => {
    (getCampaigns as any).mockImplementation(() => [campaign1, campaign2]);

    await act(async () => {
      render(wrapWithBasicRouter(<IndexCampaign />));
    });

    expect(screen.getByText(campaign1.name)).toBeDefined();
    expect(screen.getByText(campaign2.name)).toBeDefined();
    expect(getCampaigns).toHaveBeenCalled();
  });
});
