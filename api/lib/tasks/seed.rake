namespace :seed do
  desc 'Seed dev data'
  task dev: :environment do
    Campaign.create(name: 'Campaign 1')
    Campaign.create(name: 'Campaign 2')
  end
end
