import React from 'react';
import { Campaign } from '../Campaign';

export const CampaignForm = ({
  campaign,
  onChange,
  onSave,
}: {
  campaign: Campaign | Partial<Campaign>;
  onChange: (campaign: Campaign | Partial<Campaign>) => void;
  onSave: () => Promise<void>;
}): JSX.Element => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.currentTarget;

    onChange({ ...campaign, [target.name]: target.value });
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSave();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="campaign_name">Name</label>
        <input
          type="text"
          name="name"
          id="campaign_name"
          value={campaign.name}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Save" />
    </form>
  );
};
