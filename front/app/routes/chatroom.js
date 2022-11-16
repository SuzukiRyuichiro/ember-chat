import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ChatroomRoute extends Route {
  @service store;

  model({ chatroom_id }) {
    return this.store.findRecord('chatroom', chatroom_id, {
      include: 'messages,messages.user',
    });
  }
}
