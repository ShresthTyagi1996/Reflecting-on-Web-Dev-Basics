let para = document.getElementById("paragraph");
let range = document.getElementById("fontSize");

range.addEventListener("input", function () {
  let fontSize = range.value + "px";
  para.style.fontSize = fontSize;
});
