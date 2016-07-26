class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :brewery, null: false
      t.string :type, null: false
      t.string :description
      t.string :photo_url, default: "images/beer.png"

      t.timestamps null: false
    end

    add_index :beers, :name
    add_index :beers, :type
    add_index :beers, :brewery
  end
end
