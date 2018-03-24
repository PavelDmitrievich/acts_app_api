class Storage < ApplicationRecord
  has_many :acts
  validates :name, presence: true
  validates :responsible, presence: true
  validates_associated :acts
end
