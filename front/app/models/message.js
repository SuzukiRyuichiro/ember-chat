import Model, { attr, belongsTo } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr('string') content;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  @belongsTo('user') user;
  @belongsTo('chatroom') chatroom;
}
