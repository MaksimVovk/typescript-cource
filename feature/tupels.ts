const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// type alias
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

const carSpec: [number, number] = [400, 3566]

const carStats = {
  hoursepower: 400,
  weight: 3566,
}