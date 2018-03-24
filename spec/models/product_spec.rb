require 'rails_helper'

RSpec.describe Product, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:unit) }
  it { should validate_presence_of(:quantity_doc) }
  it { should validate_presence_of(:quantity_fact) }
  it { should validate_presence_of(:act_id) }
end
