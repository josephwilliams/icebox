class Beer < ActiveRecord::Base
  validates :name, :brewery, :abv, :style, presence: true
  validates :name, uniqueness: true

  has_many :reviews
  # belongs_to :brewery, presence: true
end
