import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { IndexPlayerCharacter } from '../../src/playerCharacters/IndexPlayerCharacter';
import { getPlayerCharacters } from '../../src/playerCharacters/PlayerCharacterService';
import { wrapWithBasicRouter } from '../support/RenderHelpers';

jest.mock('../../src/playerCharacters/PlayerCharacterService');

describe('IndexPlayerCharacter', (): void => {
  const playerCharacter1 = { id: '1123-3444', name: 'PlayerCharacter' };
  const playerCharacter2 = { id: '2222', name: 'Foobar' };

  it('renders each playerCharacter pulled from service', async (): Promise<
    void
  > => {
    (getPlayerCharacters as any).mockImplementation(() => [
      playerCharacter1,
      playerCharacter2,
    ]);

    await act(async () => {
      render(wrapWithBasicRouter(<IndexPlayerCharacter campaignId="10" />));
    });

    expect(screen.getByText(playerCharacter1.name)).toBeDefined();
    expect(screen.getByText(playerCharacter2.name)).toBeDefined();
    expect(getPlayerCharacters).toHaveBeenCalledWith('10');
  });
});
