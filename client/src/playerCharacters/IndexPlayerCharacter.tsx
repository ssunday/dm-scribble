import React from 'react';
import { Link } from 'react-router-dom';
import { PlayerCharacterCard } from './index/PlayerCharacterCard';
import { PlayerCharacter } from './PlayerCharacter';
import { getPlayerCharacters } from './PlayerCharacterService';
import { newPlayerCharacter } from './PlayerCharacterPaths';
import { LoadingSpinner } from '../components/LoadingSpinner';
import * as Page from '../components/Page';

export const IndexPlayerCharacter = ({
  campaignId,
}: {
  campaignId: string;
}): JSX.Element => {
  const [playerCharacters, setPlayerCharacters] = React.useState<
    PlayerCharacter[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchPlayerCharacters = async (): Promise<void> => {
    const result = await getPlayerCharacters(campaignId);
    setPlayerCharacters(result);
    setLoading(false);
  };

  React.useEffect((): void => {
    fetchPlayerCharacters();
  }, [campaignId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Page.Header>
        <h2>Player Characters</h2>
        <Link className="button" to={newPlayerCharacter(campaignId)}>
          New Player Character
        </Link>
      </Page.Header>
      <div className="card__grid">
        {playerCharacters.map((playerCharacter) => (
          <PlayerCharacterCard
            campaignId={campaignId}
            playerCharacter={playerCharacter}
            key={playerCharacter.id}
          />
        ))}
      </div>
    </div>
  );
};
