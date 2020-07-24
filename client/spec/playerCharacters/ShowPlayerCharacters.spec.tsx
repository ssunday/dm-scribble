import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { ShowPlayerCharacter } from '../../src/playerCharacters/ShowPlayerCharacter';
import { getPlayerCharacter } from '../../src/playerCharacters/PlayerCharacterService';
import { wrapWithRouterAndNestedId } from '../support/RenderHelpers';

jest.mock('../../src/playerCharacters/PlayerCharacterService');

describe('ShowPlayerCharacter', (): void => {
  const playerCharacter = { id: '1123-3444', name: 'Mahname' };

  it('render playerCharacter pulled from service', async (): Promise<void> => {
    (getPlayerCharacter as any).mockImplementation(() => {
      return playerCharacter;
    });

    await act(async () => {
      render(
        wrapWithRouterAndNestedId(
          <ShowPlayerCharacter />,
          'campaignId',
          '10',
          '5'
        )
      );
    });

    expect(screen.getByText(playerCharacter.name)).toBeDefined();
    expect(getPlayerCharacter).toHaveBeenCalledWith('10', '5');
  });

  it('renders loading spinner if undefined', async (): Promise<void> => {
    (getPlayerCharacter as any).mockImplementation(() => {
      return undefined;
    });

    await act(async () => {
      render(
        wrapWithRouterAndNestedId(
          <ShowPlayerCharacter />,
          'campaignId',
          '10',
          '5'
        )
      );
    });

    expect(screen.queryByText(playerCharacter.name)).toBeNull();
  });
});
