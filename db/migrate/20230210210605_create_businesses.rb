class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :postal_code, null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.integer :stars, null: false
      t.string :categories, null: false

      t.timestamps
    end
  end
end
