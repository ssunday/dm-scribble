import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PlayerCharacter } from './PlayerCharacter';
import { createPlayerCharacter } from './PlayerCharacterService';
import { showCampaign } from '../campaigns/CampaignPaths';
import { PlayerCharacterForm } from './shared/PlayerCharacterForm';
import { ErrorNotice } from '../form/ErrorNotice';

export const NewPlayerCharacter = (): JSX.Element => {
  const { campaignId } = useParams();

  const history = useHistory();
  const [playerCharacter, setPlayerCharacter] = React.useState<
    Partial<PlayerCharacter>
  >({
    name: '',
  });

  const [error, setError] = React.useState<string | undefined>(undefined);

  const savePlayerCharacter = async (): Promise<void> => {
    const result = await createPlayerCharacter(campaignId, playerCharacter);
    if (result.id) {
      history.push(showCampaign(campaignId));
    } else {
      setError(result.error || 'Something went wrong');
    }
  };

  return (
    <div>
      <h1>New Player Character</h1>

      <ErrorNotice error={error} />

      <PlayerCharacterForm
        playerCharacter={playerCharacter}
        onChange={(c) => setPlayerCharacter(c)}
        onSave={savePlayerCharacter}
      />
    </div>
  );
};
