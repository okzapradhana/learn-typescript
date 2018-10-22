class Vehicle{
  brand: string;
  wheel: number;

  constructor(brand: string, wheel: number){
    this.brand = brand;
    this.wheel = wheel;
  }

  move(){
    console.log(this.brand + " is moving really fast")
  }

  getVechicleWheel = () => {
    console.log(this.brand + " has " + this.wheel + (this.wheel > 1 ? " wheels" : " wheel"))
  }
  
}

class Car extends Vehicle{

  speed: number;

  constructor(brand: string, wheel: number, speed: number){
    super(brand, wheel)
    this.speed = speed;
  }

  move(){
    super.move()
    console.log(" and moving at speed " + this.speed)
  }
}

let carObject: Car = new Car("Toyota", 5, 70)
carObject.move()
console.log(carObject.wheel)
carObject.getVechicleWheel()