import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'
import Store from '@ember-data/store'
import { service } from '@ember/service'

export default class ChatroomInputComponent extends Component {
  @service declare store: Store
  @tracked
  content = ''

  @action
  async sendMessage(): void {
    const newMessage = this.store.createRecord('message', {
      content: this.content,
    })
    const chatroom = await this.store.findRecord('chatroom', 5)
    const user = await this.store.findRecord('user', 3)
    newMessage.chatroom = chatroom
    newMessage.user = user

    newMessage.save()
  }
}
