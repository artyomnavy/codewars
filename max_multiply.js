//❓DESCRIPTION:
/*Given a Divisor and a Bound, Find the largest integer N, Such That,
Conditions:
N is divisible by divisor
N is less than or equal to bound
N is greater than 0.
Notes:
The parameters (divisor, bound) passed to the function are only positive values.
It's guaranteed that a divisor is Found.
Input >> Output Examples
divisor = 2, bound = 7 ==> return (6)*/
//✔️SOLUTION:
function maxMultiple(divisor, bound) {
  if (bound % divisor === 0) {
    return bound;
  }

  return maxMultiple(divisor, (bound -= 1));
}

console.log(maxMultiple(2, 7));
