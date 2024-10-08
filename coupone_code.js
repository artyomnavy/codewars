//❓DESCRIPTION:
/*Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".*/
//✔️SOLUTION:
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (typeof enteredCode !== 'string' || typeof correctCode !== 'string') {
    return false;
  }

  if (enteredCode.toLowerCase() !== correctCode.toLowerCase()) {
    return false;
  }

  const expDate = new Date(expirationDate);
  const curDate = new Date(currentDate);

  if (curDate > expDate.setDate(expDate.getDate() + 1)) {
    return false;
  }

  return true;
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
