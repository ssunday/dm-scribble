import React from 'react';
import { Campaign } from '../Campaign';
import * as Inputs from '../../form/Inputs';
import { Form } from '../../form/Form';

export const CampaignForm = ({
  campaign,
  onChange,
  onSave,
}: {
  campaign: Campaign | Partial<Campaign>;
  onChange: (campaign: Campaign | Partial<Campaign>) => void;
  onSave: () => Promise<void>;
}): JSX.Element => {
  const handleChange = (name: string, value: unknown): void => {
    onChange({ ...campaign, [name]: value });
  };

  return (
    <Form onSubmit={onSave}>
      <Inputs.Text
        label="Name"
        prefix="campaign"
        name="name"
        value={campaign.name || ''}
        onChange={handleChange}
      />
      <Inputs.TextArea
        label="Description"
        prefix="campaign"
        name="description"
        value={campaign.description || ''}
        onChange={handleChange}
      />
    </Form>
  );
};
