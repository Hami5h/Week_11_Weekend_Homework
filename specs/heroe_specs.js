const Heroe = require('../heroe.js')
const assert = require('assert');

describe('Heroe', function() {
  let heroe;

  beforeEach(function() {
    heroe = new Heroe('Callum', 100, 'Tatties');
  });

  it('Heroe should have a name', function(){
    assert.strictEqual(heroe.name, 'Callum')
  });

  it('Heroe should have health value', function(){
    assert.strictEqual(heroe.health, 100)
  });

  it('Heroe should have favourite food', function(){
    assert.strictEqual(heroe.food, 'Tatties')
  });

  it('Heroe should be able to talk', function(){
    assert.strictEqual(heroe.talk(), 'Hi! My name is Callum')
  });

});
