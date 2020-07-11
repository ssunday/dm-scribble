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

  private

  def find_campaign
    Campaign.find(params[:id])
  end
end
