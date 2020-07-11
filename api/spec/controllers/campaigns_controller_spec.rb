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

      get '/campaigns/:id', id: campaign.id

      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(data['action']).to eq('show')
      expect(data['campaign']).to include('id' => campaign.id, 'name' => 'foobar')
    end
  end
end
