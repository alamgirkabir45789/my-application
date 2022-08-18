const myName = "Alamgir";
console.log(myName.trim());

const clk = document.getElementById("btn");
const debounce = (fn, delay) => {
  let timeOutId;
  return function () {
    if (timeOutId) {
      console.log(timeOutId);
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

clk.addEventListener(
  "click",
  debounce(function () {
    console.log("click");
  }, 500)
);
