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
};

Heroe.prototype.remove = function(task) {
  index = this.tasks.indexOf(task);
  this.tasks.splice(index, 1);
};

Heroe.prototype.eat = function(food) {
  if(food.name === this.food){
    this.health += (food.replValue * 1.5)
  } else {
    this.health += food.replValue;
  }
};



module.exports = Heroe
