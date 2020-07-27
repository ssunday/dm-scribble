import React from 'react';
import { PlayerCharacter } from '../PlayerCharacter';
import * as Inputs from '../../form/Inputs';
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
      <Inputs.Text
        label="Name"
        prefix="playerCharacter"
        name="name"
        value={playerCharacter.name || ''}
        onChange={handleChange}
      />
      <Inputs.Text
        label="Race"
        prefix="playerCharacter"
        name="race"
        value={playerCharacter.race || ''}
        onChange={handleChange}
      />
      <Inputs.Text
        label="Classes"
        prefix="playerCharacter"
        name="classes"
        value={playerCharacter.classes || ''}
        onChange={handleChange}
      />
      <Inputs.Text
        label="SheetUrl"
        prefix="playerCharacter"
        name="sheetUrl"
        value={playerCharacter.sheetUrl || ''}
        onChange={handleChange}
      />
      <Inputs.TextArea
        label="Description"
        prefix="playerCharacter"
        name="description"
        value={playerCharacter.description || ''}
        onChange={handleChange}
      />
    </Form>
  );
};
