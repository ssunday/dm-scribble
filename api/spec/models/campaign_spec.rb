describe Campaign, type: :model do
  describe 'validations' do
    it 'is not valid if no name' do
      expect(Campaign.new.valid?).to eq(false)
    end

    it 'is valid if name' do
      expect(Campaign.new(name: 'foobar').valid?).to eq(true)
    end
  end
end
