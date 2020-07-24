import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { ShowCampaign } from '../../src/campaigns/ShowCampaign';
import { getCampaign } from '../../src/campaigns/CampaignService';
import { wrapWithRouterAndId } from '../support/RenderHelpers';
import { getPlayerCharacters } from '../../src/playerCharacters/PlayerCharacterService';

jest.mock('../../src/playerCharacters/PlayerCharacterService');
jest.mock('../../src/campaigns/CampaignService');

describe('ShowCampaign', (): void => {
  const campaign = { id: '1123-3444', name: 'Campaign' };

  (getPlayerCharacters as any).mockImplementation(() => {
    return [];
  });

  it('render campaign pulled from service', async (): Promise<void> => {
    (getCampaign as any).mockImplementation(() => {
      return campaign;
    });

    await act(async () => {
      render(wrapWithRouterAndId(<ShowCampaign />, '5'));
    });

    expect(screen.getByText(campaign.name)).toBeDefined();
    expect(getCampaign).toHaveBeenCalledWith('5');
  });

  it('renders loading spinner if undefined', async (): Promise<void> => {
    (getCampaign as any).mockImplementation(() => {
      return undefined;
    });

    await act(async () => {
      render(wrapWithRouterAndId(<ShowCampaign />, '5'));
    });

    expect(screen.queryByText(campaign.name)).toBeNull();
  });
});
