import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ChatroomsRoute extends Route {
  @service store;

  async model() {
    const res = await this.store.findAll('chatroom');
    return res;
  }
}
