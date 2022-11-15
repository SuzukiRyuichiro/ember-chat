import Model, { attr, hasMany } from '@ember-data/model';

export default class ChatroomModel extends Model {
  @attr('string') name;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  @hasMany('message') messages;
}
