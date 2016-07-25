json.array!(@beers) do |beer|
  json.extract! beer, :id, :brewery, :name, :abv, :style, :description
end
