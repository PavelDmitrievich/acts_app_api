class Product < ApplicationRecord
  belongs_to :act
  validates :name, presence: true, length: { minimum: 2 }
  validates :unit, presence: true
  validates :quantity_doc, presence: true
  validates :quantity_fact, presence: true
  validates :act_id, presence: true
end