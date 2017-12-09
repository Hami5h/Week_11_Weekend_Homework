const Heroe = require('../heroe.js');
const Task = require('../task.js');
const Food = require('../food.js')
const assert = require('assert');

describe('Heroe', function() {
  let heroe;
  let task;
  let food;

  beforeEach(function() {
    heroe = new Heroe('Callum', 100, 'Tatties');
    task1 = new Task(1, 3, 300);
    task2 = new Task(3, 2, 200);
    task3 = new Task(5, 4, 100);
    food1 = new Food('Bacon roll', 70);
    food2 = new Food('Tatties', 30);
  });

  it('Heroe should have a name', function(){
    assert.strictEqual(heroe.name, 'Callum');
  });

  it('Heroe should have health value', function(){
    assert.strictEqual(heroe.health, 100);
  });

  it('Heroe should have favourite food', function(){
    assert.strictEqual(heroe.food, 'Tatties');
  });

  it('Heroe should be able to talk', function(){
    assert.strictEqual(heroe.talk(), 'Hi! My name is Callum');
  });

  it('Heroe has no tasks to complete', function(){
    assert.strictEqual(heroe.tasks.length, 0);
  })

  it('Heroe has tasks to complete', function(){
    heroe.add(task1);
    assert.strictEqual(heroe.tasks.length, 1);
  })

  it('Heroe can remove completed tasks', function() {
    heroe.add(task1);
    heroe.add(task2);
    assert.strictEqual(heroe.tasks.length, 2);
    heroe.remove(task1);
    assert.strictEqual(heroe.tasks.length, 1);
  })

  it('Heroe can eat food and recover health', function() {
    assert.strictEqual(heroe.health, 100);
    heroe.eat(food1);
    assert.strictEqual(heroe.health, 170);
  })

  it('Heroe can eat favourite food and recover extra health', function() {
    assert.strictEqual(heroe.health, 100);
    heroe.eat(food2);
    assert.strictEqual(heroe.health, 145);
  })

  it('Heroe can sort tasks by difficulty', function() {
    heroe.add(task1);
    heroe.add(task2);
    heroe.add(task3);
    assert.deepStrictEqual(heroe.sortedTaskByDifficulty(),[task1, task2, task3]);
  })

  it('Heroe can sort tasks by urgency', function() {
    heroe.add(task1);
    heroe.add(task2);
    heroe.add(task3);
    assert.deepStrictEqual(heroe.sortedTaskByUrgency(),[task2, task1, task3]);
  })



});
