import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import { EditPlayerCharacter } from '../../src/playerCharacters/EditPlayerCharacter';
import { getPlayerCharacter } from '../../src/playerCharacters/PlayerCharacterService';
import { wrapWithRouterAndNestedId } from '../support/RenderHelpers';

jest.mock('../../src/playerCharacters/PlayerCharacterService');

describe('EditPlayerCharacter', (): void => {
  const playerCharacter = { id: '1123-3444', name: 'PlayerCharacter' };

  it('render playerCharacter pulled from service', async (): Promise<void> => {
    (getPlayerCharacter as any).mockImplementation(() => {
      return playerCharacter;
    });

    await act(async () => {
      render(
        wrapWithRouterAndNestedId(
          <EditPlayerCharacter />,
          'campaignId',
          '10',
          '5'
        )
      );
    });

    expect(screen.getByLabelText(/Name/)).toBeDefined();
    expect(getPlayerCharacter).toHaveBeenCalledWith('10', '5');
  });

  it('renders loading spinner if undefined', async (): Promise<void> => {
    (getPlayerCharacter as any).mockImplementation(() => {
      return undefined;
    });

    await act(async () => {
      render(
        wrapWithRouterAndNestedId(
          <EditPlayerCharacter />,
          'campaignId',
          '10',
          '5'
        )
      );
    });

    expect(screen.queryByLabelText(/Name/)).toBeNull();
  });

  it('handles on change', async (): Promise<void> => {
    (getPlayerCharacter as any).mockImplementation(() => {
      return playerCharacter;
    });

    await act(async () => {
      render(
        wrapWithRouterAndNestedId(
          <EditPlayerCharacter />,
          'campaignId',
          '10',
          '5'
        )
      );
    });

    expect(screen.queryByDisplayValue('new name')).toBeNull();

    fireEvent.change(screen.getByLabelText(/Name/), {
      target: { value: 'new name' },
    });

    expect(screen.getByDisplayValue('new name')).toBeDefined();
  });
});
