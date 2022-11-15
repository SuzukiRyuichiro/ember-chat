require 'faker'

Message.destroy_all
Chatroom.destroy_all
User.destroy_all

john = User.create(email: 'mail@mail.com', password: '123123', name: 'John Doe', nickname: 'JD')
michael = User.create(email: 'test@test.com', password: '123123', name: 'Michael Jackson', nickname: 'MJ')

general = Chatroom.create(name: 'General')

10.times do
  author = [john, michael].sample
  Message.create(chatroom: general, user: author, content: Faker::Movies::StarWars.quote)
end
