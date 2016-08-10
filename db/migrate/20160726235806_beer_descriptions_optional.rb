class BeerDescriptionsOptional < ActiveRecord::Migration
  def change
    change_column :beers, :description, :string, null: true
  end
end
