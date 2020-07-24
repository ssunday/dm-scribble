class PlayerCharacter
  include Dynamoid::Document

  table name: :player_characters, key: :id

  table capacity_mode: :on_demand

  belongs_to :campaign

  field :name
  field :race

  validates_presence_of :name
end
