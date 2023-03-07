class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :content, null: false
      t.integer :rating, null: false
      t.references :business, null: false, foreign_key: true
      t.references :author, null: false, foreign_key: { to_table: :users }
      t.integer :useful
      t.integer :funny
      t.integer :cool
      t.timestamps
    end
  end
end
