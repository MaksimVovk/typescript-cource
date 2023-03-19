const apple: number = 5 // number
let speed: string = 'fast' // string
let hasName: boolean = true // bool

let nothingMuch: null = null // null
let nothing: undefined = undefined // undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'blue', 'green']
let myNumbers: number[] = [1,2,3,4]

// Classes
class Car {

}

let car: Car = new Car()

interface Coordinates {
  x: number
  y: number
}

// Object literal
let point: Coordinates = {
  x: 10,
  y: 20
}

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function that return the 'any' type

const json = '{ "x": 10, "y": 20 }'
const coordinates: Coordinates = JSON.parse(json)
console.log(coordinates) // { x: 10, y: 20 }

// 2) When we declare a variable on one line
// and initalizate it later

let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let w of words) {
  if (w === 'green') {
    foundWord = true
  }
}


// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let n of numbers) {
  if (n > 0) {
    numberAboveZero = n
  }
}
