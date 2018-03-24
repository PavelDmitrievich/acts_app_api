class User < ApplicationRecord
  validates :name, presence: true
  validates :email, uniqueness: true
  validates_associated :acts

  has_secure_password

  has_many :acts
  # Validations
  validates_presence_of :name, :email, :password_digest

end
