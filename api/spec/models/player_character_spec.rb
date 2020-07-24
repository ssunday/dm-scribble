describe PlayerCharacter, type: :model do
  describe 'validations' do
    it 'is not valid if no name' do
      expect(PlayerCharacter.new.valid?).to eq(false)
    end

    it 'is valid if name' do
      expect(PlayerCharacter.new(name: 'foobar').valid?).to eq(true)
    end
  end
end
