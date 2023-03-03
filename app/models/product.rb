class Product < ApplicationRecord
  # belongs_to :user
  has_many :ingredients, inverse_of: :product
  has_many :ingredients, dependent: :destroy
  has_one_attached :photo
  has_rich_text :content

  enum category: { "Short Drink": 0, "Long Drink": 1, "Aperitivos": 2, "Digestivos": 3 }
  enum subcategory: { "Sin Licor": 0, "Cerveza": 1, "Vino": 2, "Vodka": 3, "Ron": 4, "Tequila": 5, "Whisky": 6, "Coñac": 7, "Ginebra": 8, "Sidra": 9, "Pisco": 10, "Brandi": 11 }

  accepts_nested_attributes_for :ingredients, reject_if: :all_blank, allow_destroy: true

  validates :name, :photo, :category, :recipe, presence: true
end
