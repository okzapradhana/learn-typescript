var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, wheel) {
        var _this = this;
        this.getVechicleWheel = function () {
            console.log(_this.brand + " has " + _this.wheel + (_this.wheel > 1 ? " wheels" : " wheel"));
        };
        this.brand = brand;
        this.wheel = wheel;
    }
    Vehicle.prototype.move = function () {
        console.log(this.brand + " is moving really fast");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, wheel, speed) {
        var _this = _super.call(this, brand, wheel) || this;
        _this.speed = speed;
        return _this;
    }
    Car.prototype.move = function () {
        _super.prototype.move.call(this);
        console.log(" and moving at speed " + this.speed);
    };
    return Car;
}(Vehicle));
var carObject = new Car("Toyota", 5, 70);
carObject.move();
console.log(carObject.wheel);
carObject.move();
carObject.getVechicleWheel();
