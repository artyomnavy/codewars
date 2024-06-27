//❓DESCRIPTION:
/*Complete the function/method so that it returns the url with anything after the anchor (#) removed. */
//✔️SOLUTION:
function removeUrlAnchor(url) {
  const anchor = url.indexOf('#');

  if (anchor === -1) {
    return url;
  }

  return url.slice(0, anchor);
}

console.log(removeUrlAnchor('www.codewars.com#about'));
