//❓DESCRIPTION:
/*Complete the function to return true if the two arguments given are anagrams of each other;
return false otherwise.*/
//✔️SOLUTION:
let isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }

  const str1 = test.toLowerCase().split('').sort().join('');
  const str2 = original.toLowerCase().split('').sort().join('');

  for (let i = 0; i < test.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));
