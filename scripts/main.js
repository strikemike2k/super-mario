import SpriteSheet from './sprite_sheet.js'
import {loadImage, loadLevel} from './loaders.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);

loadImage('images/tileset.png')
.then(image => {
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define('ground', 0, 0);
  sprites.define('sky', 3, 23);
  
  loadLevel('1-1')
  .then(level => {
    console.log(level);
  });
  
  for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 14; y++) {
      sprites.drawTile('sky', context, x, y);
    }
  }
  for (let x = 0; x < 25; x++) {
    for (let y = 12; y < 14; y++) {
      sprites.drawTile('ground', context, x, y);
    }
  }
  
});