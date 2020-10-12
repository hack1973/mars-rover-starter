const assert = require('assert');
const Command = require('../command.js');

describe("Command Class", function() {

  it("should throw error if Command Type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: "Command type required."
      }
    );
  });

  it("should have constructor set Command Type", function() {
    let command = new Command("is Command Type", 2020);
    assert.strictEqual(command.commandType, "is Command Type");
  });

  it("should have constructor set Value if a 2nd argument is passed in", function() {
    let command = new Command("is Command Type", 2020);
    assert.strictEqual(command.value, 2020);
  });

});