import Model, { AsyncBelongsTo, attr, belongsTo } from '@ember-data/model'
import UserModel from './user'
import ChatroomModel from './chatroom'

export default class MessageModel extends Model {
  @attr declare content: string
  @attr declare createdAt: Date

  @belongsTo('user', { async: true }) declare user: AsyncBelongsTo<UserModel>
  @belongsTo('chatroom', { async: true })
  declare chatroom: AsyncBelongsTo<ChatroomModel>
}
