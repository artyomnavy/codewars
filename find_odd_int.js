//❓DESCRIPTION:
/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/
//✔️SOLUTION:
function findOdd(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  arr.sort((a, b) => a - b);

  let prev;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (prev === undefined) {
      prev = arr[i];
      count += 1;
    } else if (arr[i] === prev) {
      count += 1;
    } else if (arr[i] !== prev) {
      if (count % 2 === 1) {
        return prev;
      }

      prev = arr[i];
      count = 1;
    }
  }

  return prev;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
