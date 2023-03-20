const carMakers: (string | number)[] = ['ford', 'toyota', 'chevy']
const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro'],
]

// Help with inference when extracting values

const currentCar = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values

carMakers.push(1)

// Help with map

carMakers.map((car: string | number): string | number => {
  return car && String(car).toUpperCase()
})

const importantDates: (string | Date)[] = [new Date(), '2030-10-10']

importantDates.push('2023-05-01')