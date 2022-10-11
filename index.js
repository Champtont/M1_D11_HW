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

//Yay, I finally fixed it!!!

const hideAllImg = function () {
  let pics = document.querySelectorAll("img");
  //pics.classList.toggle("hidden"); The problem was that I forgot that I was working with an array
  for (let i = 0; i < pics.length; i++) {
    pics[i].classList.toggle("hidden");
  }
};
