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

});
