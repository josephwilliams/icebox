class Review < ActiveRecord::Base
  validates :overall, :aroma, :taste, :appearance, numericality: {
    only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10
  }

  belongs_to :user
  belongs_to :beer
  
end
