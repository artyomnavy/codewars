//❓DESCRIPTION:
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items
without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
//✔️SOLUTION:
let uniqueInOrder = function (iterable) {
  if (iterable.length === 0) {
    return [];
  }

  const result = [iterable[0]];

  let prev = iterable[0];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== prev) {
      result.push(iterable[i]);
      prev = iterable[i];
    }
  }

  return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
