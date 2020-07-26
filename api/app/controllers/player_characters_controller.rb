class PlayerCharactersController < ApplicationController
  def index
    render json: {
      action: 'index',
      playerCharacters: PlayerCharacter.where('campaign_ids.contains' => params[:campaign_id]).all
    }
  end

  def show
    render json: { action: 'show', playerCharacter: find_player_character }
  end

  def create
    player_character = PlayerCharacter.create!(player_character_params)

    render status: :created, json: { action: 'create', id: player_character.id }
  end

  def update
    PlayerCharacter.update!(params[:id], player_character_params)

    render status: :no_content
  end

  private

  def find_player_character
    PlayerCharacter.find(params[:id])
  end

  def player_character_params
    params.require(:playerCharacter).permit(:name, :race).merge(campaign_ids: [params[:campaign_id]])
  end
end
