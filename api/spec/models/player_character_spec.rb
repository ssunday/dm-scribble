describe PlayerCharacter, type: :model do
  describe 'validations' do
    describe 'name' do
      it 'is not valid if no name' do
        expect(PlayerCharacter.new.valid?).to eq(false)
      end

      it 'is valid if name' do
        expect(PlayerCharacter.new(name: 'foobar').valid?).to eq(true)
      end
    end

    describe 'sheet url' do
      it 'is not valid if bad url' do
        expect(PlayerCharacter.new(name: 'foobar', sheet_url: 'alert(\'foobar\')').valid?).to eq(false)
      end

      it 'is valid if OK url' do
        expect(PlayerCharacter.new(name: 'foobar', sheet_url: 'http://www.example.com').valid?).to eq(true)
      end

      it 'is valid if blank' do
        expect(PlayerCharacter.new(name: 'foobar', sheet_url: '').valid?).to eq(true)
      end
    end

    describe 'image url' do
      it 'is not valid if bad url' do
        expect(PlayerCharacter.new(name: 'foobar', image_url: 'alert(\'foobar\')').valid?).to eq(false)
      end

      it 'is valid if OK url' do
        expect(PlayerCharacter.new(name: 'foobar', image_url: 'http://www.example.com').valid?).to eq(true)
      end

      it 'is valid if blank' do
        expect(PlayerCharacter.new(name: 'foobar', image_url: '').valid?).to eq(true)
      end
    end
  end
end
