class Beer < ActiveRecord::Base
<<<<<<< HEAD
  validates :name, :brewery, :abv, :style, presence: true
  validates :name, uniqueness: true

  has_many :reviews
=======
  
>>>>>>> 898da893016fe86ed78d1fd86b0552ad98e5b86e
end
