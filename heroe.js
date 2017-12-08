const Heroe = function(name, health, food) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = [];
}

Heroe.prototype.talk = function() {
  return `Hi! My name is ${this.name}`;
};


module.exports = Heroe
