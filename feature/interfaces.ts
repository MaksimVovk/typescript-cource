interface Vehicle {
  name: string
  year: Date
  broken: boolean,
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary (): string {
    return `Name: ${this.name}`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}
printVehicle(oldCivic)


interface Reportable {
  summary(): string
}

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} gram of sugar`
  }
}

const printReport = (item: Reportable): void => {
  console.log(item.summary())
}

printReport(myDrink)