import Model, { attr, belongsTo } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr('string') content;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  @belongsTo('user', { async: true }) user;
  @belongsTo('chatroom', { async: true }) chatroom;
}
