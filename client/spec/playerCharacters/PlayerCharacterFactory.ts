import { PlayerCharacter } from '../../src/playerCharacters/PlayerCharacter';

export function playerCharacterFactory(
  data?: Partial<PlayerCharacter>
): PlayerCharacter {
  return {
    id: '1123-3444',
    name: 'PlayerCharacter',
    description: '',
    classes: '',
    race: '',
    ...(data || {}),
  };
}
