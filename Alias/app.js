/*
  Data Types
  - Type Alias
*/
function getActions(btns) {
    console.log("Action For Button Up Is ".concat(btns.up));
    console.log("Action For Button Right Is ".concat(btns.right));
    console.log("Action For Button Down Is ".concat(btns.down));
    console.log("Action For Button Left Is ".concat(btns.left));
    console.log("Action For Button x Is ".concat(btns.x));
}
getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
