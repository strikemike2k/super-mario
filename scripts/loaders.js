export function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

export function loadLevel(name) {
  return fetch(`levels/${name}.json`)
  .then(r => r.json())
  .then(levelSpec => {
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);

    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);

  });
}
