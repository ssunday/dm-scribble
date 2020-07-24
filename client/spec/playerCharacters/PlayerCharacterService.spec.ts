import axios from 'axios';
import * as PlayerCharacterService from '../../src/playerCharacters/PlayerCharacterService';

jest.mock('axios');

describe('PlayerCharacterService', (): void => {
  describe('getPlayerCharacters', (): void => {
    it('calls to api/campaigns/:campaignId/player_characters route', async (): Promise<
      void
    > => {
      (axios.get as any).mockImplementation(() => {
        return { data: { playerCharacters: [] } };
      });

      await PlayerCharacterService.getPlayerCharacters('2');

      expect(axios.get).toHaveBeenCalledWith(
        '/api/campaigns/2/player_characters',
        undefined
      );
    });
  });

  describe('getPlayerCharacter', (): void => {
    it('calls to api/playerCharacter route', async (): Promise<void> => {
      (axios.get as any).mockImplementation(() => {
        return { data: { playerCharacter: undefined } };
      });

      await PlayerCharacterService.getPlayerCharacter('2', '4');

      expect(axios.get).toHaveBeenCalledWith(
        '/api/campaigns/2/player_characters/4',
        undefined
      );
    });
  });

  describe('createPlayerCharacter', (): void => {
    const data = { name: '4' };

    it('calls to api/playerCharacter route', async (): Promise<void> => {
      (axios.post as any).mockImplementation(() => {
        return { status: 201 };
      });

      await PlayerCharacterService.createPlayerCharacter('2', data);

      expect(axios.post).toHaveBeenCalledWith(
        '/api/campaigns/2/player_characters',
        {
          playerCharacter: data,
        }
      );
    });
  });

  describe('updatePlayerCharacter', (): void => {
    const data = { name: '4' };

    it('calls to api/playerCharacter route with put', async (): Promise<
      void
    > => {
      (axios.put as any).mockImplementation(() => {
        return { status: 204 };
      });

      await PlayerCharacterService.updatePlayerCharacter('10', '5', data);

      expect(axios.put).toHaveBeenCalledWith(
        '/api/campaigns/10/player_characters/5',
        {
          playerCharacter: data,
        }
      );
    });
  });
});
