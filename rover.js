class Rover {
  constructor(position) {
    this.position = Number(position);
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    return {
      message: message.name
    }
  }







}

module.exports = Rover;