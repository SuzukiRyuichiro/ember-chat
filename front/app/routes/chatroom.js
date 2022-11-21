import Route from '@ember/routing/route'
import { service } from '@ember/service'
import { createConsumer } from '@rails/actioncable'
import ENV from 'front/config/environment'

export default class ChatroomRoute extends Route {
  @service store

  afterModel(_, obj) {
    const consumer = createConsumer(ENV.APP.WEB_SOCKET_URL)
    const store = this.store

    // TODO: this is not working yet
    this.channel = consumer.subscriptions.create(
      { channel: 'ChatroomChannel', id: obj.to.params.chatroom_id },
      {
        received(data) {
          data.data.type = 'message'
          console.log(data)
          store.push(data)
        },
      }
    )
  }

  deactivate() {
    console.log('unsubscribing')
    this.channel.unsubscribe()
  }

  model({ chatroom_id }) {
    return this.store.findRecord('chatroom', chatroom_id, {
      include: 'messages,messages.user',
    })
  }
}
