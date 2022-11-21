class MessageResource < JSONAPI::Resource
  after_create :broadcast

  attributes :content
  attribute :created_at

  has_one :chatroom
  has_one :user

  filter :chatroom

  private

  def broadcast
    serialized_data = JSONAPI::ResourceSerializer.new(MessageResource, include: %w[user chatroom]).object_hash(self, {})
    ChatroomChannel.broadcast_to(@model.chatroom, { data: serialized_data })
  end
end
