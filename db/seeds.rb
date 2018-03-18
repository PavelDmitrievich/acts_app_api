# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


storage_03 = Storage.create!(name: "Склад 03", responsible: "Нусупбаева М.А.")
storage_04 = Storage.create!(name: "Склад 04", responsible: "Аида")
storage_06 = Storage.create!(name: "Склад 06", responsible: "Наташа")
storage_09 = Storage.create!(name: "Склад 09", responsible: "Смитт")

user = User.create!(name: "Test", email: "qwe@qwe.qwe", password: "qweqwe", password_confirmation: "qweqwe")

act_001 = Act.create!(
  act_number: 1,
  organization: "Филиал ГП НК КТЖ по В",
  conclusion: Faker::Demographic.race,
  score: "123345, 5672345467",
  provider: "Филиал ГП НК КТЖ по МТО",
  date_of_acceptance: "14 01 2018",
  user_id: user.id,
  storage_id: storage_03.id,
)

certificate_001 = Certificate.create!(name: "TEST CERTIFICATE", serial_number: "AA12q87HH24234", act_id: act_001.id)

10.times do |n|
  Product.create!(
    name: Faker::Lorem.word,
    unit: "m",
    quantity_doc: Faker::Number.between(1, 10),
    quantity_fact: Faker::Number.between(1, 10),
    marriage: Faker::Number.between(1, 10),
    limitation: Faker::Number.between(1, 10),
    surplus: Faker::Number.between(1, 10),
    act_id: act_001.id
  )
end
