class Product < ApplicationRecord
  # belongs_to :user
  has_many :ingredients, inverse_of: :product
  has_one_attached :photo
  
  enum category: { baby: 0, young: 1, adult: 2 }
  enum subcategory: { shot: 0, large: 1, otra: 2 }

  accepts_nested_attributes_for :ingredients, reject_if: :all_blank, allow_destroy: true
end
