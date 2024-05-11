/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function me(fname: string, age?: number) : string {
    return fname + " " + age;
}

console.log(me("achraf"));


function showData(name?: string, age?: number, country?: string) {
    return `${name} - ${age} - ${country}`;
  }
  
console.log(showData("Osama",  "Egypt"));
  