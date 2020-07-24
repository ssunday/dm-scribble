import React from 'react';
import { render } from '@testing-library/react';
import { PlayerCharacterCard } from '../../../src/playerCharacters/index/PlayerCharacterCard';
import { wrapWithBasicRouter } from '../../support/RenderHelpers';

describe('PlayerCharacterCard', (): void => {
  const playerCharacter = { id: '1123-3444', name: 'PlayerCharacter' };

  it('shows the playerCharacter name but not the ID', (): void => {
    const { getByText, queryByText } = render(
      wrapWithBasicRouter(
        <PlayerCharacterCard campaignId="1" playerCharacter={playerCharacter} />
      )
    );

    expect(getByText(playerCharacter.name)).toBeDefined();
    expect(queryByText(playerCharacter.id)).toBeNull();
  });
});
