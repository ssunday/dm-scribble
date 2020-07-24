import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PlayerCharacter } from './PlayerCharacter';
import { createPlayerCharacter } from './PlayerCharacterService';
import { showCampaign } from '../campaigns/CampaignPaths';
import { PlayerCharacterForm } from './shared/PlayerCharacterForm';

export const NewPlayerCharacter = (): JSX.Element => {
  const { campaignId } = useParams();

  const history = useHistory();
  const [playerCharacter, setPlayerCharacter] = React.useState<
    Partial<PlayerCharacter>
  >({
    name: '',
  });

  const [error, setError] = React.useState<boolean>(false);

  const savePlayerCharacter = async (): Promise<void> => {
    const result = await createPlayerCharacter(campaignId, playerCharacter);
    if (result) {
      history.push(showCampaign(campaignId));
    } else {
      setError(result);
    }
  };

  return (
    <div>
      <h1>New Player Character</h1>

      {error && <p>Something went wrong</p>}

      <PlayerCharacterForm
        playerCharacter={playerCharacter}
        onChange={(c) => setPlayerCharacter(c)}
        onSave={savePlayerCharacter}
      />
    </div>
  );
};
