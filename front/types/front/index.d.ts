import Ember from 'ember'

declare global {
  // Prevents ESLint from "fixing" this via its auto-fix to turn it into a type
  // alias (e.g. after running any Ember CLI generator)
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {}

import '@glint/environment-ember-loose'

// NOTE: This import won't be necessary after Glint 0.8
import '@glint/environment-ember-loose/native-integration'

// FIXME: Remove this catch-all before merge
declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    [key: string]: any
  }
}
