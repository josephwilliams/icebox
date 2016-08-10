# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "joe", password: "password")

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

Beer.create(
  name: 'Bam Biere',
  brewery: 'Jolly Pumpkin Artisan Ales',
  style: 'Farmhouse Ale',
  abv: 4.50
)

# Breweries

Brewery.create(
  name: "Yuengling",
  location: "Pottsville, MD",
  logo_url: "https://www.yuengling.com/img/layout/logo.png",
)

Brewery.create(
  name: "Dogfish Head",
  location: "Lewes, DE",
  logo_url: "https://www.cbf.org/image/area---events/Dogfish-Head-Logo.png",
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
  logo_url: "http://www.beerboard.tv/USBN.BeerBoard.UI/Images/Logo/21st%20Amendment%20Brewing.png",
)

Brewery.create(
  name: "Anchor",
  location: "San Francisco, CA",
  logo_url: "https://pbs.twimg.com/profile_images/558002454168498176/RkJy5OFv.png",
)

Brewery.create(
  name: "Molly Pitcher",
  location: "Carlisle, PA",
  logo_url: "http://mollypitcher.com/wp-content/uploads/2014/04/molly_type1.png",
)

Brewery.create(
  name: "Victory",
  location: "Downingtown, PA",
  logo_url: "http://beerstreetjournal.com/wp-content/uploads/Victory-Brewing-Logo1.png",
)

Brewery.create(
  name: "Tröegs",
  location: "Hershey, PA",
  logo_url: "http://woodbineslic.com/files/7114/2869/6762/Troegs_Beer_Logo_2.png"
)

Brewery.create(
  name: "Flying Dog",
  location: "Frederick, MD",
  logo_url: "http://2beerguys.com/blog/wp-content/uploads/2013/01/FlyingDog_d.png"
)

Brewery.create(
  name: "Jolly Pumpkin Artisan Ale",
  location: "Dexter, MI",
  logo_url: "http://www.farmhousefest.com/images/2016/logos/jolly-pumpkin.png"
)

Brewery.create(
  name: "Southern Pacific",
  location: "San Francisco, CA",
  logo_url: "http://bayareabrewerytours.com/wp-content/uploads/2015/11/brew_southernpacific.png"
)
