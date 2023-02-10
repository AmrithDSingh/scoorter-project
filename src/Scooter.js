class Scooter{
  // scooter code here
  static nextSerial = 1;
  station = null;
  user = null;
  serial = 0;
  charge = 0;
  isBroken = false;

  constructor() {
    this.serial = Scooter.nextSerial++;
    this.station = null;
    this.user = null;
    this.charge = 0;
    this.isBroken = false;
  }
}


module.exports = Scooter
