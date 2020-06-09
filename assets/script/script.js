const displayArray = document.querySelector('#display-array');
const resetButton = document.querySelector('#reset');
const quickSortButton = document.querySelector('#quickSort');
const bubleSortButton = document.querySelector('#bubleSort');
const mergeSortButton = document.querySelector('#mergeSort')

let array = [];

//initialize Array

setArray = () => {
  for (let i = 0; i < 200; i++) {
    array.push(randomIntArray(5, 600));
  }
  return array;
};
randomIntArray = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
array = setArray();
renderArray = (array) => {
  displayArray.innerHTML = array
    .map(
      (val, index) =>
        `<div class="array-bar" key="index" style="height: ${val}px"></div>`
    )
    .join('');
};

renderArray(array);

quickSort = (origArray) => {
  
};

bubleSort = (array) => {};

resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
});

quickSortButton.addEventListener('click', (e) => {
  e.preventDefault();
  sortedArray = quickSort(array)
  renderArray(sortedArray)
});

bubleSortButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Buble Sort');
});

mergeSortButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Merge Sort')
})
