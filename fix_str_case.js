//❓DESCRIPTION:
/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters
and your task is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.*/
//✔️SOLUTION:
function solve(str) {
  const isUpperCase = (s) => {
    return s === s.toUpperCase();
  };

  let countUp = 0;
  let countLow = 0;

  str.split('').map((s) => {
    if (isUpperCase(s)) {
      countUp += 1;
    } else {
      countLow += 1;
    }
  });

  if (countUp > countLow) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(solve('CODe'));
