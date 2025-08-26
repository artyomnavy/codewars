//❓DESCRIPTION:
/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
  */
//✔️SOLUTION:
function solution(string) {
  const result = [];

  const isUpperCase = (s) => {
    return s === s.toUpperCase();
  };

  let start = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result.push(string.slice(start, i));
      start = i;
    }
  }

  result.push(string.slice(start));

  return result.join(' ');
}

console.log(solution('camelCasingTest'));
