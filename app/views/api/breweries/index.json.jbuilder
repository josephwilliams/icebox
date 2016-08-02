json.array!(@breweries) do |brewery|
  json.extract! brewery, :id, :name, :location, :logo_url
end
