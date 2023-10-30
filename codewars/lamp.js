var Lamp = /** @class */ (function () {
    function Lamp(color) {
        this.color = color;
        this.on = false;
    }
    Lamp.prototype.toggleSwitch = function () {
        this.on = !this.on;
    };
    Lamp.prototype.state = function () {
        return this.on === true ? "The lamp is on." : "The lamp is off.";
    };
    return Lamp;
}());
var myLamp = new Lamp("Blue");
console.log(myLamp.color);
console.log(myLamp.on);
console.log(myLamp.state());
// now switch it on
myLamp.toggleSwitch();
console.log(myLamp.state());
