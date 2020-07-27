class Campaign
  include Dynamoid::Document

  table name: :campaigns, key: :id
  table capacity_mode: :on_demand

  has_many :player_characters

  field :name
  field :description

  validates_presence_of :name
end
