const assert = require('assert');
const Command = require('../command.js');
const Message = require('../message.js');
const Rover = require('../rover.js');

describe("Rover class", function() {

  it("should have constructor set position and default values for mode and generatorWatts", function() {
    let rover = new Rover(1111);
    assert.strictEqual(rover.position, 1111);
    assert.strictEqual(rover.mode, 'NORMAL');
    assert.strictEqual(rover.generatorWatts, 110);
  });

it("should have response returned by receiveMessage contains name of message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Message name', commands);
  let rover = new Rover(1111);
  let response = rover.receiveMessage(message);
  assert.strictEqual(response.message, 'Message name');
  });

});