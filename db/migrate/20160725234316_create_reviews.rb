class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :beer_id, null: false
      t.integer :user_id, null: false
      t.integer :overall
      t.integer :aroma
      t.integer :taste
      t.integer :appearance

      t.timestamps null: false
    end

    add_index :reviews, :beer_id
    add_index :reviews, :user_id
  end
end
