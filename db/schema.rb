# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180318132015) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "acts", force: :cascade do |t|
    t.integer  "act_number"
    t.string   "organization"
    t.text     "conclusion"
    t.string   "score"
    t.string   "provider"
    t.string   "date_of_acceptance"
    t.integer  "user_id"
    t.integer  "storage_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["storage_id"], name: "index_acts_on_storage_id", using: :btree
    t.index ["user_id"], name: "index_acts_on_user_id", using: :btree
  end

  create_table "certificates", force: :cascade do |t|
    t.string   "name"
    t.string   "serial_number"
    t.integer  "act_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["act_id"], name: "index_certificates_on_act_id", using: :btree
  end

  create_table "people", force: :cascade do |t|
    t.string   "position"
    t.string   "full_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.string   "unit"
    t.integer  "quantity_doc"
    t.integer  "quantity_fact"
    t.integer  "marriage"
    t.integer  "limitation"
    t.integer  "surplus"
    t.integer  "act_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["act_id"], name: "index_products_on_act_id", using: :btree
  end

  create_table "storages", force: :cascade do |t|
    t.string   "name"
    t.string   "responsible"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "acts", "storages"
  add_foreign_key "acts", "users"
  add_foreign_key "certificates", "acts"
  add_foreign_key "products", "acts"
end
