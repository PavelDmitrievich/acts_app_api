# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Storage.create!(name: "Склад 03", responsible: "Нусупбаева М.А.")
Storage.create!(name: "Склад 04", responsible: "Аида")
Storage.create!(name: "Склад 06", responsible: "Наташа")
Storage.create!(name: "Склад 09", responsible: "Смитт")

user = User.create!(
    name: "Test",
    email: "qwe@qwe.qwe",
    password: "qweqwe",
    password_confirmation: "qweqwe",
    sir_name: "Smith",
    position: "BOSS"
)

15.times do |n|
  Act.create!(
      act_number: n + 1,
      organization: "Филиал ГП НК КТЖ по В",
      conclusion: Faker::Demographic.race,
      score: "123345, 5672345467",
      provider: "Филиал ГП НК КТЖ по МТО",
      date_of_acceptance: Faker::Date.backward(14 + n),
      user_id: user.id,
      storage_id: rand(1..Storage.all.count)
  )
end

15.times do
  Certificate.create!(
      name: Faker::Company.buzzword,
      serial_number: Faker::Company.french_siren_number,
      act_id: rand(1..Act.all.count)
  )
end

10.times do
  Product.create!(
      name: Faker::Company.name,
      unit: "m",
      quantity_doc: Faker::Number.between(1, 10),
      quantity_fact: Faker::Number.between(1, 10),
      marriage: Faker::Number.between(1, 10),
      limitation: Faker::Number.between(1, 10),
      surplus: Faker::Number.between(1, 10),
      act_id: rand(1..Act.all.count)
  )
end
