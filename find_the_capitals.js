//❓DESCRIPTION:
/*Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]*/
//✔️SOLUTION:
let capitals = function (word) {
  const wordUp = word.toUpperCase();
  const wordUpArr = wordUp.split('');

  const result = word.split('').reduce((arr, symbol, index) => {
    if (symbol === wordUpArr[index]) {
      arr.push(index);
    }
    return arr;
  }, []);

  return result;
};

console.log(capitals('CodEWaRs'));
