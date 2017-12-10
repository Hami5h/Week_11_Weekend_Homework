const Task = function(level, urgency, reward, status) {
  this.level = level;
  this.urgency = urgency;
  this.reward = reward;
  this.tasks = [];
  this.completed = status;
}

// Task.prototype.taskComplete = function(status) {
//   return this.completed = status;
// };


module.exports = Task
