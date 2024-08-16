//❓DESCRIPTION:
/*avaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
//✔️SOLUTION:
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
