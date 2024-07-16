//❓DESCRIPTION:
/*Given a list of digits, return the smallest number that could be formed from these digits,
using the digits only once (ignore duplicates).
Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)*/
//✔️SOLUTION:
function minValue(values) {
  const set = new Set(values);
  const res = Array.from(set)
    .sort((a, b) => a - b)
    .join('');
  return +res;
}

console.log(minValue([1, 3, 1]));
