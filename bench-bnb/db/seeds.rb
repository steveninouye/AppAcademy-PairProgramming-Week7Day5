# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

coord = [
{lat: 37.786844, lng: -122.427612},
{lat:37.780900, lng:-122.498885},
{lat: 37.802580, lng:-122.453125},
{lat: 37.800741, lng: -122.407351},
{lat:37.804328, lng: -122.440520},
{lat:37.763317, lng: -122.390492},
{lat:37.768909, lng:-122.468054},
{lat: 37.759508, lng: -122.457644},
{lat: 37.739135, lng:-122.442456},
{lat: 37.804786, lng: -122.429016},
{lat: 37.799972, lng: -122.468239},
{lat: 37.720594, lng: -122.414630}]

coord.each do |cor|
   Bench.create(description: Faker::ChuckNorris.fact, lat: cor[:lat], lng: cor[:lng])
end