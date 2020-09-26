class PlayerCharacter
  include Dynamoid::Document

  table name: :player_characters, key: :id

  table capacity_mode: :on_demand

  belongs_to :campaign

  field :name
  field :description
  field :race
  field :classes
  field :sheet_url
  field :image_url

  validates_presence_of :name
  validates_format_of :sheet_url, with: URI::DEFAULT_PARSER.make_regexp, allow_blank: true
  validates_format_of :image_url, with: URI::DEFAULT_PARSER.make_regexp, allow_blank: true
end
