/*
  Data Types
  - Type Alias
*/

// type str = string;
// type num = number;

// let age : num;
// age = 19;

// if (age>18) {
//     console.log("You will die soon!");
// } else {
//     console.log("You've got big potential!");
// }

// type numstr = str | num;

// let all : numstr = "achraf lafkiri "+ true;

// console.log(typeof all);
 

/*
  Data Types
  - Advanced Type Alias
*/

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
}

type Last = Buttons & {
  x: boolean
}

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
  console.log(`Action For Button x Is ${btns.x}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });