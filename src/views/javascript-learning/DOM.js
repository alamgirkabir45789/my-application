const width = document.getElementById("width");
width.innerHTML = "Width is:" + window.innerWidth;
const height = document.getElementById("height");
height.innerHTML = "Height is:" + window.innerHeight;
let mywindow;
const openWindow = () => {
  mywindow = window.open("http://localhost:5002/production/cut-plan");
};
const closeWindow = () => {
  mywindow.close();
};
const evn = document.getElementById("eventListn");
const myDiv = document.getElementById("myDiv");
console.log(document.documentElement);
myDiv.addEventListener(
  "mouseover",
  function () {
    console.log("hi");
  },
  true
);
evn.addEventListener("mouseover", function show() {
  evn.innerHTML = "Hello";
  console.log("hello");
});
evn.addEventListener("mouseout", function remove() {
  evn.innerHTML = "Click Me";
});
const display = document.querySelector("#displayDate");
display.onclick = function () {
  console.log("hi");
};
function designMe(id) {
  console.log(this);
  id.innerHTML = "Thanks!";
}
setTimeout(() => {}, 2000);
const changeMe = () => {
  const std = document.querySelector("#design");
  const hStd = std.style;
  hStd.color = "Yellow";
  hStd.backgroundColor = "red";
  hStd.textAlign = "center";
  hStd.margin = "50px";
  hStd.height = "50px";
};
const submitNum = () => {
  const numText = document.getElementById("num").value;
  let text;
  if (isNaN(numText) || numText < 1 || numText > 10) {
    text = "Invalid";
  } else {
    text = numText;
  }
  document.getElementById("show").innerHTML = text;
};
function validateForm() {
  const form = document.forms["myForm"];
  const val = form["name"].value;
  if (val === "") {
    alert("Enter name");
    return false;
  }
}
document.getElementById("date").innerHTML = Date();
const elm = document.getElementById("myImg");
console.dir(elm);
elm.src = "hi.png";
const data = document.forms["frm1"];
console.dir(data);
let text = "";
for (let i = 0; i < data.length; i++) {
  text = text + data.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

console.log(document.forms);
