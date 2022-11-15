import Route from '@ember/routing/route';

export default class ChatroomsRoute extends Route {
  async model() {
    const res = await fetch('/chatrooms.json');
    const { data } = await res.json();

    return data.map((chatroom) => {
      return {
        name: chatroom.attributes.name,
      };
    });
  }
}
