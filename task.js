const Task = function(level, urgency, reward) {
  this.level = level;
  this.urgency = urgency;
  this.reward = reward;
  this.tasks = [];
  this.completed = false;
}

Task.prototype.taskComplete = function(status) {
  return this.completed = status;
};


module.exports = Task
