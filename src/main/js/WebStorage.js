import is from 'is_js';

export default class WebStorage {
  static setLocalStorageWithChecked(key, value) {
    if (is.null(this.getLocalStorage(key))
      || is.empty(this.getLocalStorage(key))
      || is.undefined(this.getLocalStorage(key))) {
      WebStorage.setLocalStorage(key, value);
    }
  }

  static setLocalStorage(key, value) {
    if (WebStorage.isBrowserSupport()) {
      localStorage.setItem(key, value);
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static getLocalStorage(key) {
    if (WebStorage.isBrowserSupport()) {
      return localStorage.getItem(key);
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static removeLocalStorage(key) {
    if (WebStorage.isBrowserSupport()) {
      localStorage.removeItem(key);
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static cleanLocalStorage() {
    if (WebStorage.isBrowserSupport()) {
      localStorage.clear();
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static setSessionStorageWithChecked(key, value) {
    if (is.null(this.getSessionStorage(key))
      || is.empty(this.getSessionStorage(key))
      || is.undefined(this.getSessionStorage(key))) {
      WebStorage.setSessionStorage(key, value);
    }
  }

  static setSessionStorage(key, value) {
    if (WebStorage.isBrowserSupport()) {
      sessionStorage.setItem(key, value);
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static getSessionStorage(key) {
    if (WebStorage.isBrowserSupport()) {
      return sessionStorage.getItem(key);
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static removeSessionStorage(key) {
    if (WebStorage.isBrowserSupport()) {
      sessionStorage.removeItem(key);
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static cleanSessionStorage() {
    if (WebStorage.isBrowserSupport()) {
      sessionStorage.clear();
    } else {
      throw new TypeError('Browser not support storage.');
    }
  }

  static isBrowserSupport() {
    return typeof (Storage) !== 'undefined';
  }
}
