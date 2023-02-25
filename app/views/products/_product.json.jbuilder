json.extract! product, :id, :name, :category, :recipe, :price, :status, :subcategory, :user_id, :ingredient_id, :created_at, :updated_at
json.url product_url(product, format: :json)
