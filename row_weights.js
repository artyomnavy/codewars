//❓DESCRIPTION:
/* Scenario:
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task:
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers,
where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes:
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)*/
//✔️SOLUTION:
function rowWeights(array) {
  const result = [0, 0];

  array.map((item, index) =>
    index % 2 === 0 ? (result[0] += item) : (result[1] += item)
  );

  return result;
}

console.log(rowWeights([100, 50]));
