class ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.all

    render json: @chatrooms
  end

  def show
    @chatroom = Chatroom.includes(:messages).find(params[:id])

    render json: @chatroom.messages
  end
end
