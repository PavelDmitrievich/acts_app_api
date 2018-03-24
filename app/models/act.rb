class Act < ApplicationRecord
  belongs_to :user
  belongs_to :storage

  has_many :products
  has_many :certificates

  validates_associated :products
  validates_associated :certificates
  validates_associated :persons

  has_and_belongs_to_many :persons
end
