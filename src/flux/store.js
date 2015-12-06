import Rx from 'rx'

export default class Store {
  constructor (initialState, reducer) {
    this.dispatcherSubject = new Rx.BehaviorSubject(initialState)
    this.nextStateSubject = this.dispatcherSubject.scan(reducer)
  }
}
