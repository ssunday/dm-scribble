import * as PlayerCharacterService from '../../src/playerCharacters/PlayerCharacterService';
import * as Http from '../../src/http/Http';

jest.mock('../../src/http/Http');

describe('PlayerCharacterService', (): void => {
  describe('getPlayerCharacters', (): void => {
    it('calls to api/campaigns/:campaignId/player_characters route', async (): Promise<
      void
    > => {
      (Http.get as any).mockImplementation(() => {
        return { data: { playerCharacters: [] } };
      });

      await PlayerCharacterService.getPlayerCharacters('2');

      expect(Http.get).toHaveBeenCalledWith(
        '/api/campaigns/2/player_characters'
      );
    });
  });

  describe('getPlayerCharacter', (): void => {
    it('calls to api/playerCharacter route', async (): Promise<void> => {
      (Http.get as any).mockImplementation(() => {
        return { data: { playerCharacter: undefined } };
      });

      await PlayerCharacterService.getPlayerCharacter('2', '4');

      expect(Http.get).toHaveBeenCalledWith(
        '/api/campaigns/2/player_characters/4'
      );
    });
  });

  describe('createPlayerCharacter', (): void => {
    const data = { name: '4' };

    it('calls to api/playerCharacter route', async (): Promise<void> => {
      (Http.post as any).mockImplementation(() => {
        return { status: 201 };
      });

      await PlayerCharacterService.createPlayerCharacter('2', data);

      expect(Http.post).toHaveBeenCalledWith(
        '/api/campaigns/2/player_characters',
        {
          playerCharacter: data,
        }
      );
    });

    it('returns id', async (): Promise<void> => {
      (Http.post as any).mockImplementation(() => {
        return { status: 201, data: { id: 'foobar' } };
      });

      const result = await PlayerCharacterService.createPlayerCharacter(
        '2',
        data
      );

      expect(result.id).toBe('foobar');
    });
  });

  describe('updatePlayerCharacter', (): void => {
    const data = { name: '4' };

    it('calls to api/playerCharacter route with put', async (): Promise<
      void
    > => {
      (Http.put as any).mockImplementation(() => {
        return { status: 204 };
      });

      await PlayerCharacterService.updatePlayerCharacter('10', '5', data);

      expect(Http.put).toHaveBeenCalledWith(
        '/api/campaigns/10/player_characters/5',
        {
          playerCharacter: data,
        }
      );
    });
  });
});
