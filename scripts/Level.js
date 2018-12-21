import Compositor from './Compositor.js';

export default class Level {
  constructor() {
    this.comp = new Composition();
    this.entities = new Set();
  }
}
