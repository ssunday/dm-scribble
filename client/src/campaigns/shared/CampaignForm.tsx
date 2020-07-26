import React from 'react';
import { Campaign } from '../Campaign';
import { TextInput } from '../../form/TextInput';
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
      <TextInput
        label="Name"
        prefix="campaign"
        name="name"
        value={campaign.name || ''}
        onChange={handleChange}
      />
    </Form>
  );
};
