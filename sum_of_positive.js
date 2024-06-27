//❓DESCRIPTION: You get an array of numbers, return the sum of all of the positives ones.
//✔️SOLUTION:
function positiveSum(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > 0){
          result += arr[i]; 
      }
    };
    return result;
  }
  console.log(positiveSum([-2, 3, 7, -4, 10, 15]));