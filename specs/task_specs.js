const Task = require('../task.js')
const Heroe = require('../heroe.js')
const assert = require('assert');


describe('Task', function() {
  let heroe;
  let task;

  beforeEach(function() {
    heroe = new Heroe('Chris', 800, 'Scones');
    task1 = new Task(1, 3, 300)
    task2 = new Task(3, 2, 200)
  });

  it('Task should have a level', function() {
    assert.strictEqual(task1.level, 1);
    assert.strictEqual(task2.level, 3);
  });

});
