import Model, { AsyncHasMany, attr, hasMany } from '@ember-data/model'
import MessageModel from './message'
import { tracked } from '@glimmer/tracking'

export default class ChatroomModel extends Model {
  @attr declare name: string
  @hasMany('message', { inverse: null, async: true })
  declare messages: AsyncHasMany<MessageModel>
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    message: MessageModel
    chatroom: ChatroomModel
  }
}
