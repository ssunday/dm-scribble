import React from 'react';
import { PlayerCharacter } from '../PlayerCharacter';
import { TextInput } from '../../form/TextInput';

export const PlayerCharacterForm = ({
  playerCharacter,
  onChange,
  onSave,
}: {
  playerCharacter: PlayerCharacter | Partial<PlayerCharacter>;
  onChange: (
    playerCharacter: PlayerCharacter | Partial<PlayerCharacter>
  ) => void;
  onSave: () => Promise<void>;
}): JSX.Element => {
  const handleChange = (name: string, value: string | undefined): void => {
    onChange({ ...playerCharacter, [name]: value });
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSave();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Name"
        prefix="playerCharacter"
        name="name"
        value={playerCharacter.name || ''}
        onChange={handleChange}
      />
      <TextInput
        label="Race"
        prefix="playerCharacter"
        name="race"
        value={playerCharacter.race || ''}
        onChange={handleChange}
      />
      <input type="submit" value="Save" className="button" />
    </form>
  );
};
