class CampaignsController < ApplicationController
  def index
    render json: {
      action: 'index',
      campaigns: Campaign.all
    }
  end

  def show
    render json: { action: 'show', campaign: find_campaign }
  end

  def create
    campaign = Campaign.create(campaign_params)

    render status: :created, json: { action: 'create', campaign: campaign }
  end

  def update
    find_campaign.update_attributes(campaign_params)

    render json: { action: 'update' }
  end

  private

  def find_campaign
    Campaign.find(params[:id])
  end

  def campaign_params
    params.require(:campaign).permit(:name)
  end
end
