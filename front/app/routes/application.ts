import Route from '@ember/routing/route'
import { service } from '@ember/service'
import Store from '@ember-data/store'
import DS from 'ember-data'
import ChatroomModel from '../models/chatroom'

export default class ApplicationRoute extends Route {
  @service declare store: Store

  model(): DS.PromiseArray<ChatroomModel> {
    return this.store.findAll('chatroom')
  }
}
