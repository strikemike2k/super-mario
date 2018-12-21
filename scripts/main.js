import Timer from'./Timer.js';
import Entity from './Entity.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';

import Keyboard from './KeyboardState.js'

const input = new Keyboard();

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
  createMario(),
  loadBackgroundSprites(),
  loadLevel('1-1')
])
.then(([mario, backgroundSprites, level]) => {
  const gravity = 2000;
  mario.pos.set(64, 180);

  const SPACE = 32;
  input.addMapping(SPACE, keyState => {
    if (keyState) {
      mario.jump.start();
    } else {
      mario.jump.cancel();
    }
    console.log(keyState);
  });
  input.listenTo(window);

  const timer = new Timer(1/60);
  timer.update = function update(deltaTime) {
    mario.update(deltaTime);
    if (mario.pos.y > 176) {
      mario.pos.y = 176;
    }
    comp.draw(context);
    mario.vel.y += gravity * deltaTime;
  }

  timer.start();

});
