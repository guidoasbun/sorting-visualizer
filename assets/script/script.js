

//initialize Array

let array = []

setArray = () => {
  for (let i = 0; i < 100; i++) {
    array.push(randomIntArray(5, 1000));
  }
  return array
}

randomIntArray = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

array = setArray()

console.log(array)