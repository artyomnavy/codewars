//❓DESCRIPTION:
/*A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
//✔️SOLUTION:
function isPangram(string) {
  const str = string.toLowerCase();

  const result = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) {
      result[str[i]]++;
    }
  }

  return Object.keys(result).length === 26;
}

console.log(
  isPangram("Is 'The quick brown fox jumps over the lazy dog.' a pangram?")
);
