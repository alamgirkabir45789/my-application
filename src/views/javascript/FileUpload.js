const helloElement = document.querySelector("#hello");
console.log(helloElement);
helloElement.addEventListener("mouseover", (e) => {
  console.log(e);
});
const imgFile = document.getElementById("myFile");
const displayText = document.querySelector("span");
const imagediv = document.querySelector("#displayImg");
imgFile.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    displayText.style.display = "none";
    imagediv.style.display = "block";
    reader.addEventListener("load", function () {
      imagediv.setAttribute("src", this.result);
      console.log(this);
    });
    reader.readAsDataURL(file);
  } else {
    displayText.style.display = null;
    imagediv.style.display = null;
    imagediv.setAttribute("src", "");
  }
});
