# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "joe", password: "password")

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
  brewery: 'Brouwerij Van Steenberge',
  style: 'Belgian Dark Triple',
  abv: 10.50
)

Beer.create(
  name: 'Trappistes Rochefort 8',
  brewery: 'Brasserie de Rochefort',
  style: 'Belgian Strong Dark Ale',
  abv: 9.20
)

# Breweries

Brewery.create(
  name: "Yuengling",
  location: "Pottsville, MD",
  logo_url: "https://upload.wikimedia.org/wikipedia/en/3/3d/Yuengling_logo.png",
)

Brewery.create(
  name: "Dogfish Head",
  location: "Lewes, DE",
  logo_url: "http://images.brewbound.com/BreweryLogos/Standard/1970734.dogfishlogo.jpg",
)

Brewery.create(
  name: "Ballast Point",
  location: "San Diego, CA",
  logo_url: "http://www.ballastpoint.com/wp-content/themes/ballastpoint/_/images/ballast-point.png",
)

Brewery.create(
  name: "Brouwerij Van Steenberge",
  location: "Lindenlaan, Belgium",
  logo_url: "http://beerpulse.com/wp-content/uploads/2012/03/Brouwerij-Van-Steenberge-logo.jpg",
)

Brewery.create(
  name: "21st Amendment",
  location: "San Francisco, CA",
  logo_url: "https://upload.wikimedia.org/wikipedia/en/4/4a/21st_Amendment_Brewery_logo.jpg",
)

Brewery.create(
  name: "Anchor",
  location: "San Francisco, CA",
  logo_url: "https://pbs.twimg.com/profile_images/558002454168498176/RkJy5OFv.png",
)

Brewery.create(
  name: "Molly Pitcher",
  location: "Carlisle, PA",
  logo_url: "http://res.cloudinary.com/ratebeer/image/upload/w_400,c_limit/brew_23057.jpg",
)

Brewery.create(
  name: "Victory",
  location: "Downingtown, PA",
  logo_url: "http://www.binnys.com/blog/wp-content/uploads/2012/12/Victory-Brewing-Co1.jpeg",
)

Brewery.create(
  name: "Tröegs",
  location: "Hershey, PA",
  logo_url: "http://www.theshepnj.com/wp-content/uploads/2013/01/troegs-brewery.jpg"
)

Brewery.create(
  name: "Flying Dog",
  location: "Frederick, MD",
  logo_url: "http://www.dcbeer.com/sites/default/files/news/flying%20dog%20logo.jpeg"
)
