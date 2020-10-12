const assert = require('assert');
const Command = require('../command.js');
const Message = require('../message.js');

describe("Message class", function() {

  it("should throw error if a name is NOT passed into the constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: "Name required."
      }
    );
  });

  it("should have the constructor set name", function() {
    let message = new Message("is name", []);
    assert.strictEqual(message.name, "is name");
  });

  it("should contain a commands array passed into the constructor as 2nd argument", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    assert.strictEqual(message.commands, commands);
  });

});