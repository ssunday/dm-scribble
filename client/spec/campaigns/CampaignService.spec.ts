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

      expect(axios.get).toHaveBeenCalledWith('/api/campaigns', undefined);
    });
  });

  describe('getCampaign', (): void => {
    it('calls to api/campaign route', async (): Promise<void> => {
      (axios.get as any).mockImplementation(() => {
        return { data: { campaign: undefined } };
      });

      await CampaignService.getCampaign('4');

      expect(axios.get).toHaveBeenCalledWith('/api/campaigns/4', undefined);
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

  describe('updateCampaign', (): void => {
    const data = { name: '4' };

    it('calls to api/campaign route with put', async (): Promise<void> => {
      (axios.put as any).mockImplementation(() => {
        return { status: 204 };
      });

      await CampaignService.updateCampaign('5', data);

      expect(axios.put).toHaveBeenCalledWith('/api/campaigns/5', {
        campaign: data,
      });
    });
  });
});
