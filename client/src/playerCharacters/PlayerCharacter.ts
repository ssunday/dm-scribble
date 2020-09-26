export type PlayerCharacter = {
  id: string;
  name: string;
  description: string | null;
  race: string | null;
  classes: string | null;
  imageUrl?: string | null;
  sheetUrl?: string | null;
};

export type PlayerCharacterPayload = PlayerCharacter | Partial<PlayerCharacter>;
