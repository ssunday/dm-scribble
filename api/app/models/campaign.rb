class Campaign
  include Dynamoid::Document

  table name: :campaigns, key: :id

  table capacity_mode: :on_demand

  field :name
end
