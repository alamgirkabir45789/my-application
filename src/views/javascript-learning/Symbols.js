const arr = [4, 5, 6, 7];
const newArr = Array.from(arr, (a) => a + a);
console.log(newArr);
console.log(Array.of(arr.flatMap((f) => f * 3)));
console.log(arr);
const symbol1 = Symbol.for("This is Symbol 1");
const symbol2 = Symbol.for("This is Symbol 1");
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);
const name = "Kabir";
const name1 = new String("Kabir");
console.log(name);
console.log(name1);
console.log(name === name1);

let cricket = Symbol.for("This is cricket symbol");

var test = "Test1";
var obj = {
  name: "Tamim",
  [cricket]: "Bangladesh",
  [test]: "hi",
};
console.log(obj);
