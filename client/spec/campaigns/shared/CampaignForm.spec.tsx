import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CampaignForm } from '../../../src/campaigns/shared/CampaignForm';

describe('CampaignForm', (): void => {
  const campaign = { id: '1123-3444', name: 'Campaign' };
  const onChange = jest.fn();
  const onSave = jest.fn();

  it('handles on change', (): void => {
    const { getByLabelText } = render(
      <CampaignForm campaign={campaign} onSave={onSave} onChange={onChange} />
    );

    fireEvent.change(getByLabelText(/Name/i), {
      target: { value: 'new name' },
    });

    expect(onChange).toHaveBeenCalledWith({ ...campaign, name: 'new name' });
  });

  it('calls on save', (): void => {
    const { getByText } = render(
      <CampaignForm campaign={campaign} onSave={onSave} onChange={onChange} />
    );

    expect(onSave).not.toHaveBeenCalled();

    fireEvent.submit(getByText(/Save/i));

    expect(onSave).toHaveBeenCalled();
  });
});
