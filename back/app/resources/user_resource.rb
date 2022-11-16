class UserResource < JSONAPI::Resource
  attributes :name, :email, :nickname

  has_many :messages
end
