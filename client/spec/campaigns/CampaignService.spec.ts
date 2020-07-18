import axios from 'axios';
import { getCampaigns } from '../../src/campaigns/CampaignService';

jest.mock('axios');

describe('CampaignService', (): void => {
  it('calls to api/campaigns route', async (): Promise<void> => {
    (axios.get as any).mockImplementation(() => {
      return { data: { campaigns: [] } };
    });

    await getCampaigns();

    expect(axios.get).toHaveBeenCalledWith('/api/campaigns');
  });
});
