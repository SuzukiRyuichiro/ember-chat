import Model, { attr } from '@ember-data/model';

export default class ChatroomModel extends Model {
  @attr('string') name;
}
