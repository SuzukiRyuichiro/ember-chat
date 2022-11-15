import Route from '@ember/routing/route';

export default class ChatroomRoute extends Route {
  model(params) {
    return params;
  }
}
