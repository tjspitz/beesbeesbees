var ForagerBee = function() {
  // call the parent class (still Bee)
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// inherit methods
ForagerBee.prototype = Object.create(Bee.prototype)

// point constructor to self
ForagerBee.prototype.constructor = ForagerBee

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}