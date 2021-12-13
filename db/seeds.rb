# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
User.destroy_all

@admin = User.create!(username: "Tony Soprano", email: "TonyS@gmail.com", password: "123456")

Album.create!(
  title:"Kind of Blue",
  artist:"Miles Davis",
  genre:"Jazz",
  vendor:"Waterloo Records",
  condition:"Mint",
  cost:"$40.00",
  purchased:2021,
  released:1959,
  cover_url:"https://img.discogs.com/HHYEYoXSKrwMxOp_lSmq9oNmML8=/fit-in/600x608/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2825456-1430770143-1057.jpeg.jpg",
  user: @admin
)
Album.create!(
  title:"Midnight Blue",
  artist:"Kenny Burrell",
  genre:"Jazz",
  vendor:"Disogs",
  condition:"Near Mint",
  cost:"$35.00",
  purchased:2020,
  released:1963,
  cover_url:"https://img.discogs.com/jEdaOaYIg_lOqsPmGMjt-Kblz64=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5953455-1590237726-6201.jpeg.jpg",
  user: @admin
)

Album.create!(
  title:"Idle Moments",
  artist:"Grant Green",
  genre:"Jazz",
  vendor:"Encore Music",
  condition:"Very Good Plus",
  cost:"$30.00",
  purchased:2019,
  released:1964,
  cover_url:"https://img.discogs.com/gZEImCpuECxmbFiR3bZxyNTRknQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3163215-1351719174-4016.jpeg.jpg",
  user_id: @admin[:id]
)
Album.create!(
  title:"Mingus Ah Um",
  artist:"Charles Mingus",
  genre:"Jazz",
  vendor:"Amazon",
  condition:"Very Good",
  cost:"$25.00",
  purchased:2018,
  released:1959,
  cover_url:"https://img.discogs.com/HqgB8WUAgF0H6VOVUN958JFnGaY=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1355742-1434340189-3474.jpeg.jpg",
  user: @admin
)

puts "#{User.count} users created"
puts "#{Album.count} albums created"


