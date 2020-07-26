import React from 'react';
import { PlayerCharacter } from '../PlayerCharacter';
import { TextInput } from '../../form/TextInput';
import { Form } from '../../form/Form';

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

  return (
    <Form onSubmit={onSave}>
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
    </Form>
  );
};
