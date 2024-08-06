//❓DESCRIPTION:
/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
See test cases for more examples.
The input will be a lowercase string with no spaces.*/
//✔️SOLUTION:
function capitalize(s) {
  const res = [];

  let even = '';
  let odd = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
    } else {
      even += s[i];
    }
  }

  res.push(even);

  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      odd += s[i].toUpperCase();
    } else {
      odd += s[i];
    }
  }

  res.push(odd);

  return res;
}

console.log(capitalize('abcdef'));
