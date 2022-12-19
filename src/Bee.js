var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// inherit methods from Grub
Bee.prototype = Object.create(Grub.prototype)

// point the constructor to the Bee (not Grub)
Bee.prototype.constructor = Bee