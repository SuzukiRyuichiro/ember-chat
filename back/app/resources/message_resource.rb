class MessageResource < JSONAPI::Resource
  attributes :content
  has_one :chatroom
  has_one :user

  filter :chatroom
end
