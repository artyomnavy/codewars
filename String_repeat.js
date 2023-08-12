//❓DESCRIPTION:
//Write a function that accepts an integer n and a string s as parameters,
//and returns a string of s repeated exactly n times.
//✔️SOLUTION:
function repeatStr (n, s) {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}
console.log(repeatStr(5, 'Hello'));
/*Alternative solution:
function repeatStr (n, s) {
  return s.repeat(n);
}