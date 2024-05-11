/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const add = function(num1: number , num2: number) : number {
    return num1+num2;
}

console.log(add(1,2));

const add2 = (num1: number , num2: number) : number => num1+num2;

console.log(add2(1,2));
