import Model, { AsyncHasMany, attr, hasMany } from '@ember-data/model'
import MessageModel from './message'

export default class ChatroomModel extends Model {
  @attr declare name: string

  @hasMany('message', { inverse: null, async: true })
  declare messages: AsyncHasMany<MessageModel>
}
