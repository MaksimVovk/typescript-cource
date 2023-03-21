class Vehicle {
  // color: string
  constructor (public color: string) {
    this.color = color
  }

  protected honk (): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class Car extends Vehicle {
  constructor (public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log('vroom')
  }

  startDrive (): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'blue')

console.log(car.wheels)
car.startDrive()