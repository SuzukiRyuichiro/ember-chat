import Route from '@ember/routing/route'
import { service } from '@ember/service'
import { createConsumer } from '@rails/actioncable'
import { Channel } from 'actioncable'
import ENV from 'front/config/environment'
import Store from '@ember-data/store'
import DS from 'ember-data'
import ChatroomModel from '../models/chatroom'

interface ChatroomRouteParams {
  chatroom_id: string
}

export default class ChatroomRoute extends Route {
  declare channel: Channel
  @service declare store: Store

  activate(transition: any) {
    console.log(transition)
  }

  afterModel(_, obj: Object) {
    const consumer = createConsumer(ENV.APP['WEB_SOCKET_URL'])
    const store = this.store

    // TODO: this is not working yet
    this.channel = consumer.subscriptions.create(
      { channel: 'ChatroomChannel', id: obj.to.params.chatroom_id },
      {
        received(data: any) {
          data.data.type = 'message'
          console.log(data)
          store.push(data)
        },
        connected() {
          console.log('コネクト成功')
        },
      }
    )
  }

  deactivate() {
    console.log('deactivate')
    this.channel.unsubscribe()
  }

  model({ chatroom_id }: ChatroomRouteParams): DS.PromiseObject<ChatroomModel> {
    return this.store.findRecord('chatroom', chatroom_id, {
      include: 'messages,messages.user',
    })
  }
}
