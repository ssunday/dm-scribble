import axios from 'axios';
import * as CampaignService from '../../src/campaigns/CampaignService';

jest.mock('axios');

describe('CampaignService', (): void => {
  describe('getCampaigns', (): void => {
    it('calls to api/campaigns route', async (): Promise<void> => {
      (axios.get as any).mockImplementation(() => {
        return { data: { campaigns: [] } };
      });

      await CampaignService.getCampaigns();

      expect(axios.get).toHaveBeenCalledWith('/api/campaigns');
    });
  });

  describe('getCampaign', (): void => {
    it('calls to api/campaign route', async (): Promise<void> => {
      (axios.get as any).mockImplementation(() => {
        return { data: { campaign: undefined } };
      });

      await CampaignService.getCampaign('4');

      expect(axios.get).toHaveBeenCalledWith('/api/campaigns/4');
    });
  });

  describe('createCampaign', (): void => {
    const data = { name: '4' };

    it('calls to api/campaign route', async (): Promise<void> => {
      (axios.post as any).mockImplementation(() => {
        return { status: 201 };
      });

      await CampaignService.createCampaign(data);

      expect(axios.post).toHaveBeenCalledWith('/api/campaigns', {
        campaign: data,
      });
    });
  });
});
