import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PlayerCharacterForm } from '../../../src/playerCharacters/shared/PlayerCharacterForm';

describe('PlayerCharacterForm', (): void => {
  const playerCharacter = { id: '1123-3444', name: 'PlayerCharacter' };
  const onChange = jest.fn();
  const onSave = jest.fn();

  it('handles on change for name', (): void => {
    render(
      <PlayerCharacterForm
        playerCharacter={playerCharacter}
        onSave={onSave}
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'new name' },
    });

    expect(onChange).toHaveBeenCalledWith({
      ...playerCharacter,
      name: 'new name',
    });
  });

  it('handles on change for race', (): void => {
    render(
      <PlayerCharacterForm
        playerCharacter={playerCharacter}
        onSave={onSave}
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByLabelText(/Race/i), {
      target: { value: 'new race' },
    });

    expect(onChange).toHaveBeenCalledWith({
      ...playerCharacter,
      race: 'new race',
    });
  });

  it('calls on save', (): void => {
    const { getByText } = render(
      <PlayerCharacterForm
        playerCharacter={playerCharacter}
        onSave={onSave}
        onChange={onChange}
      />
    );

    expect(onSave).not.toHaveBeenCalled();

    fireEvent.submit(getByText(/Save/i));

    expect(onSave).toHaveBeenCalled();
  });
});
