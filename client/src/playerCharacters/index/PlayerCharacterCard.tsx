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
      <h3 className="card__title">
        <Link to={showPlayerCharacter(campaignId, playerCharacter.id)}>
          {playerCharacter.name}
        </Link>
      </h3>
      <h4 className="card__subtitle">Race: {playerCharacter.race}</h4>
      <h4 className="card__subtitle">Classes: {playerCharacter.classes}</h4>
      <p>{playerCharacter.description}</p>
    </div>
  );
};
