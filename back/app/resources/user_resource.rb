class UserResource < JSONAPI::Resource
  attributes :name, :email

  has_many :messages
end
