// 2. Perforn sorting of an array in descending order.


function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }  
  const inputArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortDescending(inputArray);
  
  console.log("Original Array:", inputArray);
  console.log("Sorted Array (Descending):", sortedArray);
  