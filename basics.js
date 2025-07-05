let para = document.getElementById("paragraph");
let range = document.getElementById("fontSize");

range.addEventListener("input", function () {
  let fontSize = range.value + "pt";
  para.style.fontSize = fontSize;
});
