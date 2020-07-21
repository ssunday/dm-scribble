import axios from 'axios';
import { Campaign } from './Campaign';

type Result = {
  data: Record<string, unknown>;
};

export async function getCampaigns(): Promise<Campaign[]> {
  try {
    const response: Result = await axios.get('/api/campaigns');
    return response.data.campaigns as Campaign[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCampaign(id: string): Promise<Campaign | undefined> {
  try {
    const response: Result = await axios.get(`/api/campaigns/${id}`);
    return response.data.campaign as Campaign | undefined;
  } catch (error) {
    return undefined;
  }
}

export async function createCampaign(
  data: Partial<Campaign>
): Promise<boolean> {
  try {
    const response: Result = await axios.post('/api/campaigns', {
      campaign: data,
    });
    return response.data.status === 201;
  } catch (error) {
    return false;
  }
}
