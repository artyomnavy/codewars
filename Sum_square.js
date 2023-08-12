//❓DESCRIPTION:
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//✔️SOLUTION:
function squareSum(numbers){
  let array = [];
  
  for (let i = 0; i < numbers.length; i++) {
    array.push(Math.pow(numbers[i], 2));
  }
  
  let sum = 0;
  for (let i = 0; i < array.length; i++ ) {
    sum += array[i];
  }
  
  return sum;
}

console.log(squareSum([1, 2, 3, 4, 5]));