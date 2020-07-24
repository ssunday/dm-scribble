import React from 'react';
import { Campaign } from '../Campaign';
import { TextInput } from '../../form/TextInput';

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

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSave();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Name"
        prefix="campaign"
        name="name"
        value={campaign.name || ''}
        onChange={handleChange}
      />
      <input type="submit" value="Save" />
    </form>
  );
};
