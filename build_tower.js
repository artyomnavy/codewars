//❓DESCRIPTION:
/*Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
//✔️SOLUTION:
function towerBuilder(nFloors) {
  const result = [];
  const star = '*';
  const space = ' ';

  if (nFloors === 1) {
    return [star];
  }

  for (let i = nFloors; i > 0; i--) {
    const spaces = space.repeat(nFloors - i);
    const stars = star.repeat(2 * i - 1);

    result.unshift(`${spaces}${stars}${spaces}`);
  }

  return result;
}

console.log(towerBuilder(3));
