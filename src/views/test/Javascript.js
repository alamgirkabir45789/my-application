const str = "Hello World";
const stringReverse = (arr) => {
  return arr.split("").reverse().join("");
};

console.log(stringReverse(str));

const loopFunc = (atr) => {
  let myArr = "";
  for (let a of atr) {
    myArr = a + myArr;
  }
  return myArr;
};
console.log(loopFunc("Bangladesh"));
