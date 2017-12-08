const Task = function(level, urgency, reward) {
  this.level = level;
  this.urgency = urgency;
  this.reward = reward;
  this.tasks = [];
  this.completed = false;
}


module.exports = Task
