import React from 'react';
import { PlayerCharacterPayload } from '../PlayerCharacter';
import * as Inputs from '../../form/Inputs';
import { Form } from '../../form/Form';

export const PlayerCharacterForm = ({
  playerCharacter,
  onChange,
  onSave,
}: {
  playerCharacter: PlayerCharacterPayload;
  onChange: (playerCharacter: PlayerCharacterPayload) => void;
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
        label="Character Sheet Url"
        prefix="playerCharacter"
        name="sheetUrl"
        value={playerCharacter.sheetUrl || ''}
        onChange={handleChange}
      />
      <Inputs.Text
        label="Image Url"
        prefix="playerCharacter"
        name="imageUrl"
        value={playerCharacter.imageUrl || ''}
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
