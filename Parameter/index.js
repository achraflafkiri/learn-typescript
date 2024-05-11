/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/
function me(fname, age) {
    return fname + " " + age;
}
console.log(me("achraf"));
function showData(name, age, country) {
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showData("Osama", "Egypt"));
