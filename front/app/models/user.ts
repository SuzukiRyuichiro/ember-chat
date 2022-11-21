import Model, { attr } from '@ember-data/model'

export default class UserModel extends Model {
  @attr declare name: string
  @attr declare nickname: string
  @attr declare email: string

  get firstName(): string {
    return this.name.split(' ')[0] || ''
  }

  get isJohn(): boolean {
    return this.name === 'John Doe'
  }
}
