class ReviewsOverallReviewNecessary < ActiveRecord::Migration
  def change
    change_column :reviews, :overall, :integer, null: false
  end
end
