const changeHeading = function (sentence) {
  document.getElementById("h1").innerHTML = sentence;
};

changeHeading("Something New");

const pageBackground = function (color) {
  document.body.style.backgroundColor = color;
};

pageBackground("lightblue");

const fakeAddress = function (str) {
  document.getElementById("address").innerHTML = str;
};

fakeAddress("123 fake rd. Nonexistant, Country 45678");

const addCssClass = function () {
  let ele = document.getElementsByTagName("a");
  for (let i = 0; i < ele.length; i++) {
    ele[i].classList.add("CSS");
  }
};

addCssClass();

const hideAllImg = function () {
  let img = document.getElementsByClassName("img");
  if (img.style.display === "block") {
    img.style.display = "hidden";
  } else {
    img.style.display = "block";
  }
};
