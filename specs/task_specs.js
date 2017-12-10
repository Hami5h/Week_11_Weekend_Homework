const Task = require('../task.js')
const Heroe = require('../heroe.js')
const assert = require('assert');


describe('Task', function() {
  let heroe;
  let task;

  beforeEach(function() {
    heroe = new Heroe('Chris', 800, 'Scones');
    task1 = new Task(1, 3, 300, true)
    task2 = new Task(3, 2, 200, false)
  });

  it('Task should have a level', function() {
    assert.strictEqual(task1.level, 1);
    assert.strictEqual(task2.level, 3);
  });

  it('Task should have an urgency', function() {
    assert.strictEqual(task1.urgency, 3);
    assert.strictEqual(task2.urgency, 2);
  });

  it('Task should have a reward', function() {
    assert.strictEqual(task1.reward, 300);
    assert.strictEqual(task2.reward, 200);
  });

  it('Task can be marked complete', function() {
    assert.strictEqual(task1.completed, true);
    assert.strictEqual(task2.completed, false);
  });

});
