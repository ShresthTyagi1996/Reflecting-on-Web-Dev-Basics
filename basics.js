let para = document.getElementById("paragraph");
let range = document.getElementById("fontSize");

range.addEventListener("input", function () {
  let fontSize = range.value + "pt";
  para.style.fontSize = fontSize;
});

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  this.document.body.classList.toggle("scrolled", scrollTop > 0);
});
