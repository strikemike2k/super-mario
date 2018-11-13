import Compositor from './Compositor.js';
import Entity from './Entity.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
  createMario(),
  loadBackgroundSprites(),
  loadLevel('1-1')
])
.then(([mario, backgroundSprites, level]) => {
  const comp = new Compositor();

  const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
  //comp.layers.push(backgroundLayer);

  const gravity = 30;
  mario.pos.set(64, 180);
  mario.vel.set(200, -600);

  const spriteLayer = createSpriteLayer(mario);
  comp.layers.push(spriteLayer);

  const deltaTime = 1/60;
  let accumulatedTime = 0;
  let lastTime = 0;

  function update(time) {
    accumulatedTime = (time - lastTime) / 1000;
    console.log(deltaTime, time);
    while (accumulatedTime > deltaTime) {
      comp.draw(context);
      mario.update(deltaTime);
      mario.vel.y += gravity;
      accumulatedTime -= deltaTime;
    }
    //requestAnimationFrame(update);
    setTimeout(update, 1000/60, performance.now());

    lastTime = time;
  }
  update(0);

});
