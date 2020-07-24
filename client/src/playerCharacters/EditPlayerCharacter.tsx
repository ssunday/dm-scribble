import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PlayerCharacter } from './PlayerCharacter';
import {
  getPlayerCharacter,
  updatePlayerCharacter,
} from './PlayerCharacterService';
import { PlayerCharacterForm } from './shared/PlayerCharacterForm';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { showPlayerCharacter } from './PlayerCharacterPaths';

export const EditPlayerCharacter = (): JSX.Element => {
  const { campaignId, id } = useParams();
  const history = useHistory();

  const [playerCharacter, setPlayerCharacter] = React.useState<
    PlayerCharacter | undefined
  >(undefined);

  const fetchPlayerCharacter = async (): Promise<void> => {
    const result = await getPlayerCharacter(campaignId, id);
    setPlayerCharacter(result);
  };

  const savePlayerCharacter = async (): Promise<void> => {
    if (id && playerCharacter) {
      const result = await updatePlayerCharacter(
        campaignId,
        id,
        playerCharacter
      );

      if (result) {
        history.push(showPlayerCharacter(campaignId, id));
      }
    }
  };

  React.useEffect(() => {
    fetchPlayerCharacter();
  }, [id]);

  if (playerCharacter) {
    return (
      <div>
        <PlayerCharacterForm
          playerCharacter={playerCharacter}
          onChange={(c) => setPlayerCharacter(c as PlayerCharacter)}
          onSave={savePlayerCharacter}
        />
      </div>
    );
  }

  return <LoadingSpinner />;
};
