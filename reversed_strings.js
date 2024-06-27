//❓DESCRIPTION: Complete the solution so that it reverses the string passed into it. 
//✔️SOLUTION:
function solution(str){
    var wordRev = "";
    for (var i = str.length - 1; i >= 0; i--) {
      wordRev += str[i];
    }
    return wordRev;
  }
  console.log(solution('amazing'));