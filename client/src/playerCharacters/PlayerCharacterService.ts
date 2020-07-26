import { PlayerCharacter } from './PlayerCharacter';
import * as Http from '../http/Http';

export async function getPlayerCharacters(
  campaignId: string
): Promise<PlayerCharacter[]> {
  try {
    const response = await Http.get(
      `/api/campaigns/${campaignId}/player_characters`
    );
    return response.data.playerCharacters as PlayerCharacter[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPlayerCharacter(
  campaignId: string,
  id: string
): Promise<PlayerCharacter | undefined> {
  try {
    const response = await Http.get(
      `/api/campaigns/${campaignId}/player_characters/${id}`
    );
    return response.data.playerCharacter as PlayerCharacter | undefined;
  } catch (error) {
    return undefined;
  }
}

export async function createPlayerCharacter(
  campaignId: string,
  data: Partial<PlayerCharacter>
): Promise<Http.CreatedResult> {
  const response = await Http.post(
    `/api/campaigns/${campaignId}/player_characters`,
    {
      playerCharacter: data,
    }
  );
  return response.data;
}

export async function updatePlayerCharacter(
  campaignId: string,
  id: string,
  data: Partial<PlayerCharacter>
): Promise<boolean> {
  const response = await Http.put(
    `/api/campaigns/${campaignId}/player_characters/${id}`,
    {
      playerCharacter: data,
    }
  );
  return response.status === Http.HttpCode.NoContent;
}
