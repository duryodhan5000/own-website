document.querySelector("button").addEventListener("click", playGame);

function playGame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var imageAddress1 = "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", imageAddress1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var imageAddress2 = "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", imageAddress2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".result").innerHTML = "Huraah! you Won."
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".result").innerHTML = "Oops! your friend Won."
  } else {
    document.querySelector(".result").innerHTML = "It's a draw."
  }
}
