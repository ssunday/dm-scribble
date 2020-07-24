namespace :seed do
  desc 'Seed dev data'
  task dev: :environment do
    campaign1 = Campaign.create(name: 'Campaign 1')
    PlayerCharacter.create(campaign: campaign1, name: 'Jane Doeth', race: 'Human')
    PlayerCharacter.create(campaign: campaign1, name: 'Dwarfman', race: 'Dwarf')
    campaign2 = Campaign.create(name: 'Campaign 2')
    PlayerCharacter.create(campaign: campaign2, name: 'Elf Lady', race: 'Elf')
    PlayerCharacter.create(campaign: campaign2, name: 'Some Guy', race: 'Human')
  end
end
