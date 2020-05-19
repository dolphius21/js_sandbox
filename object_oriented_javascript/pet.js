class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound =sound;
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'pug', 'arf arf');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');
const scofield = new Pet('dog', 6, 'dobberman', 'bow wow');
const edel = new Pet('dog', 7, 'german shorthaired pointer', 'aww aww');

console.log(ernie);
console.log(vera);
console.log(scofield);
console.log(edel);

ernie.speak();
vera.speak();
scofield.speak();
edel.speak();