//❓DESCRIPTION:
/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"].
The second one contains a student's submitted answers.
The two arrays are not empty and are the same length.
Return the score for this array of answers, giving +4 for each correct answer,
-1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.
If the score < 0, return 0.*/
//✔️SOLUTION:
function checkExam(array1, array2) {
  let result = 0;

  for (let i = 0; i < array2.length; i++) {
    switch (array2[i]) {
      case array1[i]:
        result += 4;
        break;
      case '':
        result;
        break;
      default:
        result -= 1;
        break;
    }
  }

  if (result < 0) {
    return 0;
  }

  return result;
}

console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));
