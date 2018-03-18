class Act < ApplicationRecord
  belongs_to :user
  belongs_to :storage

  has_many :products
  has_many :certificates

  has_and_belongs_to_many :persons
end
