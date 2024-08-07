//❓DESCRIPTION:
/*Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].*/
//✔️SOLUTION:
function flattenAndSort(array) {
  if (array.length > 0) {
    const arr = array.filter((item) => item.length > 0);

    if (arr.length > 0) {
      const res = arr.join(',').split(',').map(Number);
      return res.sort((a, b) => a - b);
    }
  }

  return [];
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
