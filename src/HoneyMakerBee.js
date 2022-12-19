var HoneyMakerBee = function() {
  // call the parent class to construct
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype)

HoneyMakerBee.prototype.constructor = HoneyMakerBee

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
  return this.honeyPot;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot --;
  return this.honeyPot;
}