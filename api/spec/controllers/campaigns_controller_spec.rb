describe CampaignsController, type: :controller do
  describe 'GET #index' do
    it 'index returns a success response' do
      get '/campaigns'

      expect(response.status).to eq(200)
    end
  end

  describe 'GET #show' do
    it 'show returns a success response' do
      campaign = Campaign.create(name: 'foobar')

      get '/campaigns/:id', campaign_id: campaign.id

      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(data['action']).to eq('show')
      expect(data['campaign']).to include('id' => campaign.id, 'name' => 'foobar')
    end
  end

  describe 'PUT #update' do
    let(:campaign) { Campaign.create(name: 'foobar 123') }

    it 'updates a campaign' do
      put '/campaigns/:id', campaign_id: campaign.id, params: { campaign: { name: 'Test 123' } }

      expect(response.status).to eq(204)
      expect(campaign.reload.name).to eq('Test 123')
    end

    it 'handles bad data' do
      put '/campaigns/:id', campaign_id: campaign.id, params: { campaign: { name: '' } }

      expect(response.status).to eq(422)
    end
  end

  describe 'POST #create' do
    it 'creates a campaign' do
      post '/campaigns', params: { campaign: { name: 'Test' } }

      data = JSON.parse(response.body)

      expect(response.status).to eq(201)
      expect(data['action']).to eq('create')
      expect(data['id']).to_not be_nil
    end

    it 'handles bad data' do
      post '/campaigns', params: { campaign: { name: '' } }

      expect(response.status).to eq(422)
    end
  end
end
