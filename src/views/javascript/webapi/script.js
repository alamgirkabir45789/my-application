const inputObj = document.getElementById("demo");
console.log(inputObj);
const validation = () => {
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("range overflow error!");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("range under error!");
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity(" valueMissing error!");
  }
  if (!inputObj.checkValidity()) {
    document.getElementById("demo2").innerHTML = inputObj.validationMessage;
    console.log("first");
  }
};

goBack = () => {
  console.log(window.history.back());
};
setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};
getLocalStorage = (key) => {
  alert(localStorage.getItem(key));
};
removeLocalStorage = (key) => {
  alert(localStorage.removeItem(key));
};
clearLocalStorage = () => {
  alert(localStorage.clear());
};
