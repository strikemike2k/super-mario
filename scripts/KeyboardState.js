const PRESSED = 1;
const RELEASED = 0;

export default class KeyboardState {
  constructor() {
    // Holds the current state of a given key
    this.keyStates = new Map();

    // Holds the callback functions for a keyCode
    this.keyMap = new Map();
  }

  addMapping(keyCode, callback) {
    this.keyMap.set(keyCode, callback);
  }

  handleEvent(event) {
    const {keyCode} = event;

    if (!this.keyMap.has(keyCode)) {
      // Did not have key mapped.
      return;
    }

    event.preventDefault();

    const keyState = event.type === 'keydown' ? PRESSED : RELEASED;

    if (this.keyStates.get(keyCode) === keyState) {
      return;
    }

    this.keyStates.set(keyCode, keyState);

    this.keyMap.get(keyCode)(keyState);
  }
}