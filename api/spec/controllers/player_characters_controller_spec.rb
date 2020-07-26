describe PlayerCharactersController, type: :controller do
  let(:campaign) { Campaign.create(name: 'foobar 123') }

  describe 'GET #index' do
    it 'returns pcs for campaign' do
      PlayerCharacter.create(name: 'foobar', campaign_ids: [campaign.id])
      PlayerCharacter.create(name: 'test', campaign_ids: [campaign.id])
      PlayerCharacter.create(name: 'test 5', campaign_ids: [])

      get '/campaigns/:campaign_id/player_characters', campaign_id: campaign.id

      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(data['action']).to eq('index')
      expect(data['playerCharacters'].count).to eq(2)
    end
  end

  describe 'GET #show' do
    let(:player_character) { PlayerCharacter.create(name: 'foobar') }

    it 'returns a success response' do
      get '/campaigns/:campaign_id/player_characters/:id', id: player_character.id, campaign_id: campaign.id

      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(data['action']).to eq('show')
      expect(data['playerCharacter']).to include('id' => player_character.id, 'name' => 'foobar')
    end
  end

  describe 'PUT #update' do
    let(:player_character) { PlayerCharacter.create(name: 'foobar') }

    it 'updates a playerCharacter' do
      put '/campaigns/:campaign_id/player_characters/:id',
          campaign_id: campaign.id,
          id: player_character.id,
          params: { playerCharacter: { name: 'Test' } }

      expect(response.status).to eq(204)
      expect(player_character.reload.name).to eq('Test')
      expect(player_character.reload.campaign_ids.to_a).to eq([campaign.id])
    end

    it 'handles bad data' do
      put '/campaigns/:campaign_id/player_characters/:id',
          campaign_id: campaign.id,
          id: player_character.id,
          params: { playerCharacter: { name: '' } }

      expect(response.status).to eq(422)
    end
  end

  describe 'POST #create' do
    it 'creates a playerCharacter' do
      post '/campaigns/:campaign_id/player_characters',
           campaign_id: campaign.id,
           params: { playerCharacter: { name: 'Test' } }

      data = JSON.parse(response.body)

      player_character = PlayerCharacter.first

      expect(response.status).to eq(201)
      expect(data['action']).to eq('create')
      expect(data['id']).to_not be_nil
      expect(player_character.campaign_ids.to_a).to eq([campaign.id])
    end

    it 'handles bad data' do
      post '/campaigns/:campaign_id/player_characters',
           campaign_id: campaign.id,
           params: { playerCharacter: { name: '' } }

      expect(response.status).to eq(422)
    end
  end
end
