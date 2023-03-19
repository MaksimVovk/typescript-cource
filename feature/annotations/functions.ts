// arrow function
const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a + b
}

// named function
function devide (a: number, b: number): number {
  return a / b
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

interface Forecast {
  date: Date
  weather: string
}

const forecast: Forecast = {
  date: new Date(),
  weather: 'sunny',
}

const loggerWeather = ({ date, weather }: Forecast): void => {
  console.log(date.toISOString())
  console.log(weather)
}

loggerWeather(forecast)