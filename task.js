const Task = function(level, urgency, reward) {
  this.level = 0;
  this.urgency = 0;
  this.reward = 0;
  this.tasks = [];
  this.completed = false;
}


module.exports = Task
