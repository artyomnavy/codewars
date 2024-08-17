//❓DESCRIPTION:
/*Complete the method which accepts an array of integers, and returns one of the following:
  "yes, ascending" - if the numbers in the array are sorted in an ascending order
  "yes, descending" - if the numbers in the array are sorted in a descending order
  "no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.*/
//✔️SOLUTION:
function isSortedAndHow(array) {
  const asc = [...array].sort((a, b) => a - b);
  const desc = [...array].sort((a, b) => b - a);

  switch (array.toString()) {
    case asc.toString():
      return 'yes, ascending';
      break;
    case desc.toString():
      return 'yes, descending';
      break;
    default:
      return 'no';
      break;
  }
}

console.log(isSortedAndHow([15, 7, 3, -8]));
