class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses, id: false do |t|
      t.string :business_id, null: false
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :postal_code, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :stars, null: false
      t.text :categories, null: false
      t.json :hours
      t.json :properties, null: false
      t.timestamps
    end
  end
end
