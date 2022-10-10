const changeHeading = function (sentence) {
  document.getElementById("h1").innerHTML = sentence;
};

changeHeading("Something New");

const pageBackground = function (color) {
  document.body.style.backgroundColor = color;
};

pageBackground("lightblue");
