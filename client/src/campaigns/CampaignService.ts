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
