class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :location
      t.string :logo_url

      t.timestamps null: false
    end
  end
end
