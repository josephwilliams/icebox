# encoding: UTF-8
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

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 20160725234316) do

  create_table "beers", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "brewery",     null: false
    t.float    "abv",         null: false
    t.string   "style",       null: false
    t.string   "description", null: false
    t.string   "photo_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "beer_id",    null: false
    t.integer  "user_id",    null: false
    t.integer  "overall"
    t.integer  "aroma"
    t.integer  "taste"
    t.integer  "appearance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["beer_id"], name: "index_reviews_on_beer_id"
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id"
=======
ActiveRecord::Schema.define(version: 20160726205255) do

  create_table "beers", force: :cascade do |t|
    t.string   "name",                                    null: false
    t.string   "brewery",                                 null: false
    t.string   "type",                                    null: false
    t.string   "description"
    t.string   "photo_url",   default: "images/beer.png"
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
  end

  add_index "beers", ["brewery"], name: "index_beers_on_brewery"
  add_index "beers", ["name"], name: "index_beers_on_name"
  add_index "beers", ["type"], name: "index_beers_on_type"
>>>>>>> 898da893016fe86ed78d1fd86b0552ad98e5b86e

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                        null: false
    t.string   "password_digest",                                                                                 null: false
    t.string   "session_token",                                                                                   null: false
    t.string   "email"
    t.string   "picture_url",     default: "https://s3-us-west-1.amazonaws.com/icebox-beer/default_prof_pic.jpg"
    t.datetime "created_at",                                                                                      null: false
    t.datetime "updated_at",                                                                                      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["username"], name: "index_users_on_username"

end
