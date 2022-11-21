import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class ChatroomInputComponent extends Component {
  @tracked content = ''
}
