//❓DESCRIPTION:
/*Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.*/
//✔️SOLUTION:
function largestPairSum(numbers) {
  const sort = numbers.sort((a, b) => a - b);

  return sort[sort.length - 1] + sort[sort.length - 2];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
