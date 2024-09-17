//❓DESCRIPTION:
/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order).
The original array will be not empty and will contain at least "number" even numbers.*/
//✔️SOLUTION:
function evenNumbers(array, number) {
  const arrEven = array.filter((num) => num % 2 === 0 || num % 2 === -0);

  if (arrEven.length === number) {
    return arrEven;
  } else {
    return arrEven.slice(-number);
  }
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
