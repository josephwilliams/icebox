class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :brewery, null: false
      t.float :abv, null: false
      t.string :style, null: false
      t.string :description, null: false
      t.string :photo_url

      t.timestamps null: false
    end
  end
end
