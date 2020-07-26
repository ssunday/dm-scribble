import { Campaign } from './Campaign';
import * as Http from '../http/Http';

export async function getCampaigns(): Promise<Campaign[]> {
  const response = await Http.get('/api/campaigns');
  return response.data.campaigns as Campaign[];
}

export async function getCampaign(id: string): Promise<Campaign | undefined> {
  const response = await Http.get(`/api/campaigns/${id}`);
  return response.data.campaign as Campaign | undefined;
}

export async function createCampaign(
  data: Partial<Campaign>
): Promise<Http.CreatedResult> {
  const response = await Http.post('/api/campaigns', {
    campaign: data,
  });
  return response.data;
}

export async function updateCampaign(
  id: string,
  data: Partial<Campaign>
): Promise<boolean> {
  const response = await Http.put(`/api/campaigns/${id}`, {
    campaign: data,
  });
  return response.status === Http.HttpCode.NoContent;
}
