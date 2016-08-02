# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "joseph", password: "password")

# Russian River
Beer.create(
  name: 'Pliny the Edler',
  brewery: 'Russian River Brewing Company',
  style: 'Double IPA',
  abv: 8.00
)

Beer.create(
  name: 'Blind Pig I.P.A.',
  brewery: 'Russian River Brewing Company',
  style: 'IPA',
  abv: 6.25
)

Beer.create(
  name: 'Damnation',
  brewery: 'Russian River Brewing Company',
  style: 'Golden Ale IPA',
  abv: 6.25
)

Beer.create(
  name: 'Russian River Porter',
  brewery: 'Russian River Brewing Company',
  style: 'Robust Porter',
  abv: 5.75
)

# 21st Ammendment
Beer.create(
  name: 'Brew Free or Die',
  brewery: '21st Ammendment Brewery',
  style: 'American IPA',
  abv: 7.00
)

# Ballast Point
Beer.create(
  name: 'Sculpin',
  brewery: 'Ballast Point Brewing Company',
  style: 'American IPA',
  abv: 7.00
)

# Yuengling
Beer.create(
  name: 'Yuengling Traditional Lager',
  brewery: 'Yuengling Brewery',
  style: 'American Amber Lager',
  abv: 4.50
)

# Dogfish Head
Beer.create(
  name: '60 Minute IPA',
  brewery: 'Dogfish Head',
  style: 'IPA',
  abv: 6.00
)

Beer.create(
  name: '90 Minute IPA',
  brewery: 'Dogfish Head',
  style: 'Imperial IPA',
  abv: 9.00
)

Beer.create(
  name: '120 Minute IPA',
  brewery: 'Dogfish Head',
  style: 'Imperial IPA',
  abv: 17.50
)

Beer.create(
  name: 'Raison D\'Etre',
  brewery: 'Dogfish Head',
  style: 'Belgian-style Brown Ale',
  abv: 8.00
)

Beer.create(
  name: 'Punkin Ale',
  brewery: 'Dogfish Head',
  style: 'Pumpkin Ale',
  abv: 7.00
)

Beer.create(
  name: 'Golden Monkey',
  brewery: 'Victory',
  style: 'Belgian-style Tripel',
  abv: 9.50
)

Beer.create(
  name: 'Gulden Draak',
  brewery: 'Brouwerij Van Steenberge N.V.',
  style: 'Belgian Dark Triple',
  abv: 10.50
)

Beer.create(
  name: 'Trappistes Rochefort 8',
  brewery: 'Brasserie de Rochefort',
  style: 'Belgian Strong Dark Ale',
  abv: 9.20
)
