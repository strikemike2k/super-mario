import {Trait} from '../Entity.js';

export default class Go extends Trait {
  constructor() {
    super('go');

    this.direction = 0;
    this.speed = 3000;
  }

  update(entity, deltaTime){
    entity.vel.x = this.speed * this.direction * deltaTime;
    if (this.engageTime > 0) {
      entity.vel.y = -this.velocity;
      this.engageTime -= deltaTime;
    }
  }
}
