let myWindow;
const openWindow = () => {
  mywindow = window.open(
    "https://www.youtube.com/watch?v=bxmummkz71g&list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy&index=103",
    "_self"
  );
};

const closeWindow = () => {
  window.close(mywindow);
};
console.log(window.screen.availWidth);
const screenWidth = document.getElementById("screen");
screenWidth.innerHTML = "Screen Width is" + window.screen.availWidth;
