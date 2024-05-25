type Listener<T> = (items: T[]) => void;

/**
 * state base class, contains listeners
 */
export default class State<T> {
  protected listeners: Listener<T>[] = [];

  addEventListener(listenerFun: Listener<T>) {
    this.listeners.push(listenerFun);
  }
}
