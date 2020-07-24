import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PlayerCharacterForm } from '../../../src/playerCharacters/shared/PlayerCharacterForm';

describe('PlayerCharacterForm', (): void => {
  const playerCharacter = { id: '1123-3444', name: 'PlayerCharacter' };
  const onChange = jest.fn();
  const onSave = jest.fn();

  it('handles on change', (): void => {
    const { getByLabelText } = render(
      <PlayerCharacterForm
        playerCharacter={playerCharacter}
        onSave={onSave}
        onChange={onChange}
      />
    );

    fireEvent.change(getByLabelText(/Name/i), {
      target: { value: 'new name' },
    });

    expect(onChange).toHaveBeenCalledWith({
      ...playerCharacter,
      name: 'new name',
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
