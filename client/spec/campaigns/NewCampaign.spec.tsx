import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NewCampaign } from '../../src/campaigns/NewCampaign';

describe('NewCampaign', (): void => {
  it('renders heading and form label', async (): Promise<void> => {
    render(<NewCampaign />);

    expect(screen.getByText('New Campaign')).toBeDefined();
    expect(screen.getByText('Name')).toBeDefined();
  });

  it('handles on change', async (): Promise<void> => {
    render(<NewCampaign />);

    expect(screen.queryByDisplayValue('new name')).toBeNull();

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'new name' },
    });

    expect(screen.getByDisplayValue('new name')).toBeDefined();
  });
});
