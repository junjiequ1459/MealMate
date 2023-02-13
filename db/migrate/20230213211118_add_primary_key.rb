class AddPrimaryKey < ActiveRecord::Migration[7.0]
  def change
    change_table :businesses, primary_key: :business_id do |t|
    end
  end
end
