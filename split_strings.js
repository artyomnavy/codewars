//❓DESCRIPTION:
/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/
//✔️SOLUTION:
function solution(str) {
  if (!str) {
    return [];
  }

  const result = str.match(/..?/g);

  if (str.length % 2 === 1) {
    result[result.length - 1] += '_';
  }

  return result;
}

console.log(solution('abcdef'));
