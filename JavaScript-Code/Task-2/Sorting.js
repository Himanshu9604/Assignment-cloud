// 2. Perforn sorting of an array in descending order.




function customSortDescending(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] < arr[j + 1]) {
              
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }

  return arr;
}

const inputArray = [5, 2, 9, 1, 5, 6];
const sortedArray = customSortDescending(inputArray);

console.log("Original Array:", inputArray);
console.log("Sorted Array (Descending):", sortedArray);
    




/// second way ///////

// function sortDescending(arr) {
//     return arr.sort((a, b) => b - a);
//   }  
//   const inputArray = [5, 2, 9, 1, 5, 6];
//   const sortedArray = sortDescending(inputArray);
  
//   console.log("Original Array:", inputArray);
//   console.log("Sorted Array (Descending):", sortedArray);
  