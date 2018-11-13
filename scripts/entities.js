import Entity from './Entity.js';
import {loadMarioSprite} from './sprites.js';

export function createMario() {
  return loadMarioSprite()
  .then(sprite => {
    // BEGIN exact copy from main.js
    const mario = new Entity();
    mario.pos.set(64, 180);
    mario.vel.set(2, -10);

    mario.draw = function drawMario(context) {
      sprite.draw('idle', context, this.pos.x, this.pos.y); // change marioSprite to sprites
    }

    mario.update = function updateMario(deltaTime) {
      this.pos.x += this.vel.x * deltaTime;
      this.pos.y += this.vel.y * deltaTime;
    }
    // END exact copy from main.js

    return mario;
  });
}
