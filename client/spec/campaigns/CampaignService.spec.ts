import * as CampaignService from '../../src/campaigns/CampaignService';
import * as Http from '../../src/http/Http';

jest.mock('../../src/http/Http');

describe('CampaignService', (): void => {
  describe('getCampaigns', (): void => {
    it('calls to api/campaigns route', async (): Promise<void> => {
      (Http.get as any).mockImplementation(() => {
        return { data: { campaigns: [] } };
      });

      await CampaignService.getCampaigns();

      expect(Http.get).toHaveBeenCalledWith('/api/campaigns');
    });
  });

  describe('getCampaign', (): void => {
    it('calls to api/campaign route', async (): Promise<void> => {
      (Http.get as any).mockImplementation(() => {
        return { data: { campaign: undefined } };
      });

      await CampaignService.getCampaign('4');

      expect(Http.get).toHaveBeenCalledWith('/api/campaigns/4');
    });
  });

  describe('createCampaign', (): void => {
    const data = { name: '4' };

    it('calls to api/campaign route', async (): Promise<void> => {
      (Http.post as any).mockImplementation(() => {
        return { status: 201 };
      });

      await CampaignService.createCampaign(data);

      expect(Http.post).toHaveBeenCalledWith('/api/campaigns', {
        campaign: data,
      });
    });

    it('returns id', async (): Promise<void> => {
      (Http.post as any).mockImplementation(() => {
        return { status: 201, data: { id: 'foobar' } };
      });

      const result = await CampaignService.createCampaign(data);

      expect(result.id).toBe('foobar');
    });
  });

  describe('updateCampaign', (): void => {
    const data = { name: '4' };

    it('calls to api/campaign route with put', async (): Promise<void> => {
      (Http.put as any).mockImplementation(() => {
        return { status: 204 };
      });

      await CampaignService.updateCampaign('5', data);

      expect(Http.put).toHaveBeenCalledWith('/api/campaigns/5', {
        campaign: data,
      });
    });
  });
});
