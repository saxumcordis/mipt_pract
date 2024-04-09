import { Todolist } from './src/Todolist/Todolist';


function putNoice() {
  console.log(this.name + 'says ' + this.sound)
}

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

/*const cat = {
  name: 'bob',
  sound: 'meow',
  putNoice,
}

const dob = {
  name: 'bobby',
  sound: 'aww',
  putNoice,
}


const eliphant = {
  name: 'nash slon',
  sound: 'wwwwww',
  putNoice,
} */

/* const cat = new Animal('bob', 'meow')
const dog = new Animal('bobby', 'aww');
const eliphant = new Animal('nash slon', 'wwww');

console.log(cat, dog, eliphant) */

class Vehicle {
  // #vin; - private field
  _vin;

  constructor(maxSpeed, maxFuel, consumption, maxDistance) {
    this.maxSpeed = maxSpeed;
    this.maxFuel = maxFuel;
    this.consumption = consumption;
    this.maxDistance = maxDistance;
    this._vin = '1234';
  }


  #calculateRange() {
    return 10;
  }

  _calculateRange() {
    return 10;
  }

  getAvailableRange() {
    this.#calculateRange();
  }

  getInfo() {
    return {
      maxSpeed: this.maxSpeed,
      maxFuel: this.maxFuel,
      consumption: this.consumption,
      maxDistance: this.maxDistance
    }
  }
}

class Car extends Vehicle {
  constructor(...args) {
    super(...args);

    this.wheelsCount = 4;
  }

  beepBoop() {
    console.log('beep boop')
  }
}

class Plane extends Vehicle {
  constructor(maxHeight, ...args) {
    super(...args);

    this.wheelsCount = 6;
    this.maxHeight = maxHeight;
  }


  getInfo() {
    const baseInfo = super.getInfo();
    this._vin; // НЕ РЕКОМЕНДУЕТСЯ, т.к приватное (непонятно его поведение, лучше использовать публичный интерфейс)
    this._calculateRange; // НЕ РЕКОМЕНДУЕТСЯ, т.к приватное


    return {
      /* maxSpeed: this.maxSpeed,
      maxFuel: this.maxFuel,
      consumption: this.consumption,
      maxDistance: this.maxDistance, */
      ...baseInfo,
      maxHeight: this.maxHeight,
    }
  }
}

/**   ======================================  */

const todoListItems = [
  'Сделать 1 задание',
  'Сделать 2 задание',
  'Сделать 3 задание',
  'Сходить в магазин',
  'Сделать лабку',
]
const contentContainer = document.querySelector('.content');
const todoListView = new Todolist(todoListItems, contentContainer);

todoListView.render();






