class Lamp {
  color: string;
  on: boolean;

  constructor(color: string) {
    this.color = color;
    this.on = false;
  }

  toggleSwitch() {
    this.on = !this.on;
  }
  state() {
    return this.on === true ? "The lamp is on." : "The lamp is off.";
  }
}

const myLamp = new Lamp("Blue");
console.log(myLamp.color);

console.log(myLamp.on);
console.log(myLamp.state());
// now switch it on
myLamp.toggleSwitch();
console.log(myLamp.state());
