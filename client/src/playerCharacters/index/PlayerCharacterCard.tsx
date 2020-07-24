import React from 'react';
import { PlayerCharacter } from '../PlayerCharacter';
import { showPlayerCharacter } from '../PlayerCharacterPaths';
import { Link } from 'react-router-dom';

export const PlayerCharacterCard = ({
  campaignId,
  playerCharacter,
}: {
  campaignId: string;
  playerCharacter: PlayerCharacter;
}): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card__title">{playerCharacter.name}</h3>
      <Link to={showPlayerCharacter(campaignId, playerCharacter.id)}>View</Link>
    </div>
  );
};
