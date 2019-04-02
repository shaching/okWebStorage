export default class Session {
  static set(key, value) {
    sessionStorage.setItem(key, value);
  }

  static get(key) {
    return sessionStorage.getItem(key);
  }

  static remove(key) {
    sessionStorage.removeItem(key);
  }

  static clear() {
    sessionStorage.clear();
  }
}
