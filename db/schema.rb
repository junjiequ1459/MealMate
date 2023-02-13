# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_13_211118) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", id: false, force: :cascade do |t|
    t.string "business_id", null: false
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "postal_code", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.integer "stars", null: false
    t.text "categories", null: false
    t.json "hours"
    t.json "properties", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "zipcode", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
