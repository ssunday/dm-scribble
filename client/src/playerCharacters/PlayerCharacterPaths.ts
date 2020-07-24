export const newPlayerCharacter = (campaignId: string): string =>
  `/campaigns/${campaignId}/player_characters/new`;
export const showPlayerCharacter = (campaignId: string, id: string): string =>
  `/campaigns/${campaignId}/player_characters/${id}`;
export const editPlayerCharacter = (campaignId: string, id: string): string =>
  `/campaigns/${campaignId}/player_characters/${id}/edit`;
