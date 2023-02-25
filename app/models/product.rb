class Product < ApplicationRecord
  # belongs_to :user
  has_many :ingredient
end
