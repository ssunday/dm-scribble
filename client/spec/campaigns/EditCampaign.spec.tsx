import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import { EditCampaign } from '../../src/campaigns/EditCampaign';
import { getCampaign } from '../../src/campaigns/CampaignService';
import { wrapWithRouterAndId } from '../support/RenderHelpers';

jest.mock('../../src/campaigns/CampaignService');

describe('EditCampaign', (): void => {
  const campaign = { id: '1123-3444', name: 'Campaign' };

  it('render campaign pulled from service', async (): Promise<void> => {
    (getCampaign as any).mockImplementation(() => {
      return campaign;
    });

    await act(async () => {
      render(wrapWithRouterAndId(<EditCampaign />, '5'));
    });

    expect(screen.getByLabelText(/Name/i)).toBeDefined();
    expect(getCampaign).toHaveBeenCalledWith('5');
  });

  it('renders loading spinner if undefined', async (): Promise<void> => {
    (getCampaign as any).mockImplementation(() => {
      return undefined;
    });

    await act(async () => {
      render(wrapWithRouterAndId(<EditCampaign />, '5'));
    });

    expect(screen.queryByLabelText(/Name/i)).toBeNull();
  });

  it('handles on change', async (): Promise<void> => {
    (getCampaign as any).mockImplementation(() => {
      return campaign;
    });

    await act(async () => {
      render(wrapWithRouterAndId(<EditCampaign />, '5'));
    });

    expect(screen.queryByDisplayValue('new name')).toBeNull();

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'new name' },
    });

    expect(screen.getByDisplayValue('new name')).toBeDefined();
  });
});
