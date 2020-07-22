import { Campaign } from './Campaign';
import * as Http from '../http/Http';

export async function getCampaigns(): Promise<Campaign[]> {
  try {
    const response = await Http.get('/api/campaigns');
    return response.data.campaigns as Campaign[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCampaign(id: string): Promise<Campaign | undefined> {
  try {
    const response = await Http.get(`/api/campaigns/${id}`);
    return response.data.campaign as Campaign | undefined;
  } catch (error) {
    return undefined;
  }
}

export async function createCampaign(
  data: Partial<Campaign>
): Promise<boolean> {
  try {
    const response = await Http.post('/api/campaigns', {
      campaign: data,
    });
    return response.status === Http.HttpCode.Created;
  } catch (error) {
    return false;
  }
}

export async function updateCampaign(
  id: string,
  data: Partial<Campaign>
): Promise<boolean> {
  try {
    const response = await Http.put(`/api/campaigns/${id}`, {
      campaign: data,
    });
    return response.status === Http.HttpCode.NoContent;
  } catch (error) {
    return false;
  }
}
