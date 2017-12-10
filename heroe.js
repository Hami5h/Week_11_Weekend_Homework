const Heroe = function(name, health, food) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = [];
  this.completedTasks = [];
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

Heroe.prototype.sortedTaskByDifficulty = function() {
  let sortByLevel = this.tasks.sort(function(a, b) {
    return a.level - b.level;
  })
  return sortByLevel;
};

Heroe.prototype.sortedTaskByUrgency = function() {
  let sortByUrgency = this.tasks.sort(function(a, b) {
    return a.urgency - b.urgency;
  })
  return sortByUrgency;
};

Heroe.prototype.sortedTaskByReward = function() {
  let sortByReward = this.tasks.sort(function(a, b) {
    return a.reward - b.reward;
  })
  return sortByReward;
};

Heroe.prototype.addCompletedTask = function (task) {
  this.completedTasks.push(task)
}



module.exports = Heroe
