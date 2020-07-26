import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { showCampaign } from '../campaigns/CampaignPaths';

export const PlayerCharacterLayout = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const { campaignId } = useParams();

  return (
    <div className="player-character-container">
      <div className="breadcrumbs">
        <Link to={showCampaign(campaignId)}>Back to Campaign</Link>
      </div>
      {props.children}
    </div>
  );
};
