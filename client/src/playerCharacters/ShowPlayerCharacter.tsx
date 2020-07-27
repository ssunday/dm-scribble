import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlayerCharacter } from './PlayerCharacter';
import { getPlayerCharacter } from './PlayerCharacterService';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { editPlayerCharacter } from './PlayerCharacterPaths';
import * as Page from '../components/Page';

export const ShowPlayerCharacter = (): JSX.Element => {
  const { campaignId, id } = useParams();

  const [playerCharacter, setPlayerCharacter] = React.useState<
    PlayerCharacter | undefined
  >(undefined);

  const fetchPlayerCharacter = async (): Promise<void> => {
    const result = await getPlayerCharacter(campaignId, id);
    setPlayerCharacter(result);
  };

  React.useEffect(() => {
    fetchPlayerCharacter();
  }, [campaignId, id]);

  if (playerCharacter) {
    return (
      <div>
        <Page.Header>
          <h1>{playerCharacter.name}</h1>
          <Link
            className="button"
            to={editPlayerCharacter(campaignId, playerCharacter.id)}
          >
            Edit
          </Link>
        </Page.Header>
        <div>
          <p>Race: {playerCharacter.race}</p>
        </div>
      </div>
    );
  }

  return <LoadingSpinner />;
};
