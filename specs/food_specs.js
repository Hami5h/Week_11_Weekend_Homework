const Food = require('../food.js')
const assert = require('assert');

describe('Food', function() {
  let food;

  beforeEach(function() {
    food1 = new Food('Bacon roll', 70)
  });

  it('Food should have a name', function(){
    assert.strictEqual(food1.name, 'Bacon roll');
  });

})
