const Heroe = function(name, health, food) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = [];
}

Heroe.prototype.talk = function() {
  return `Hi! My name is ${this.name}`;
};

Heroe.prototype.add = function(task) {
  this.tasks.push(task);
}

Heroe.prototype.remove = function(task) {
  index = this.tasks.indexOf(task);
  this.tasks.splice(index, 1);
}

module.exports = Heroe
