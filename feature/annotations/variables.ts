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

// Object literal
let point: {
  x: number
  y: number
} = {
  x: 10,
  y: 20
}

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}