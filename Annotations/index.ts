/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

let xxx: string = "achraf";
let agxe: number = 12;

age = 399;

let allVwars : any[];

allVwars = ["str", 123, [{0: 1,1: 1, 2: 2}], [1, 2, 3]];

function adwd(a: number, b:number) : number {
    return a + b;
}

console.log(adwd(10, 20));
console.log(typeof adwd(10, 20));

