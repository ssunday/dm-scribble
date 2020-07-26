import * as React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { PlayerCharacter } from './PlayerCharacter';
import {
  getPlayerCharacter,
  updatePlayerCharacter,
} from './PlayerCharacterService';
import { PlayerCharacterForm } from './shared/PlayerCharacterForm';
import { LoadingSpinner } from '../components/LoadingSpinner';
import * as Page from '../components/Page';
import { showPlayerCharacter } from './PlayerCharacterPaths';
import { ErrorNotice } from '../form/ErrorNotice';

export const EditPlayerCharacter = (): JSX.Element => {
  const { campaignId, id } = useParams();
  const history = useHistory();

  const [playerCharacter, setPlayerCharacter] = React.useState<
    PlayerCharacter | undefined
  >(undefined);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const fetchPlayerCharacter = async (): Promise<void> => {
    const result = await getPlayerCharacter(campaignId, id);
    setPlayerCharacter(result);
  };

  const savePlayerCharacter = async (): Promise<void> => {
    if (id && playerCharacter) {
      const result = await updatePlayerCharacter(campaignId, id, playerCharacter);
      if (result) {
        setError(result.error || 'Something went wrong');
      } else {
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
        <Page.Header>
          <h1>Editing Character</h1>
          <Link className="button button--gray" to={showPlayerCharacter(campaignId, id)}>
            Cancel
          </Link>
        </Page.Header>
        <ErrorNotice error={error} />

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
