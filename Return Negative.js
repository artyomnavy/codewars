//❓DESCRIPTION: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//✔️SOLUTION:
function makeNegative(num) {
    if (num > 0) {
      return -num;
      }
    else if (num < 0) {
      return num
    } else {
      return 0;
      }
  }
  console.log(makeNegative(5));