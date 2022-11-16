class ChatroomResource < JSONAPI::Resource
  attributes :name

  has_many :messages
end
