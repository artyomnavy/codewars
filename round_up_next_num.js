//❓DESCRIPTION:
/*Given an integer as input, can you round it to the next
(meaning, "greater than or equal") multiple of 5?*/
//✔️SOLUTION:
function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  }

  return roundToNext5(n + 1);
}

console.log(roundToNext5(-2));
