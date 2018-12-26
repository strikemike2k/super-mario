import Keyboard from './KeyboardState.js';

export function setupKeyboard(entity) {
  const SPACE = 32;
  const RIGHT = 39;
  const LEFT = 37;
  input.addMapping(SPACE, keyState => {
    if (keyState) {
      entity.jump.start();
    } else {
      entity.jump.cancel();
    }
  });
  input.addMapping(RIGHT, keyState => {
    entity.go.direction = keyState;
  });
  input.addMapping(LEFT, keyState => {
    entity.go.direction = -keyState;
  });

  return input;
}
