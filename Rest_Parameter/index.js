/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var res = 0;
    nums.forEach(function (num) { return res += num; });
    // res = 0
    // res = res + num = 0 + 10 = 10
    // res = res + num = 10 + 20 = 30
    // res = res + num = 30 + 30 = 60
    // res = 60 + 100 = 160
    // res = 160 + 10.5 = 170.5
    // res = 170.5 + (+true) = 170.5 + (+1) = 171.5
    // return 171.5
    return res;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
