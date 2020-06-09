let array = []

//initialize Array


setArray = () => {
  for (let i = 0; i < 200; i++) {
    array.push(randomIntArray(5, 600));
  }
  return array
}
randomIntArray = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
array = setArray()
renderArray = (array) => {
  document.getElementById('display-array').innerHTML = array.map((val, index)=> (
  `<div class="array-bar" key="index" style="height: ${val}px"></div>`
)).join('')
}

renderArray(array)

