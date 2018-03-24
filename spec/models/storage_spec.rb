require 'rails_helper'

RSpec.describe Storage, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:responsible) }
end
