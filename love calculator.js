document.querySelector("button").addEventListener("click", calculate);

function calculate() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector(".result").innerHTML = "You love your partner " + randomNumber + "%."
}
