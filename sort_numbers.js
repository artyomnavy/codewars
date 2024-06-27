//❓DESCRIPTION:
/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null value then it should return an empty array.*/
//✔️SOLUTION:
function solution(nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }

  const result = nums.sort((a, b) => a - b);

  return result;
}

console.log(solution([1, 2, 3, 10, 5]));
