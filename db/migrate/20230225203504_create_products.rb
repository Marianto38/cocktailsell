class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :category, default: 0, null: false
      t.text :recipe, null: false
      t.decimal :price, null: false
      t.boolean :status, default: true
      t.integer :subcategory, default: 0
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
