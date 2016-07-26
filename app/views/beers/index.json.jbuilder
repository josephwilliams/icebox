json.array! @beers do |beer|
  json.extract! beer, :id, :name, :brewery, :type, :description, :photo_url
end
