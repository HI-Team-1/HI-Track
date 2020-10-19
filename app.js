var todayButton = document.querySelector(".todayButton");
var leftActivies = document.querySelectorAll(".leftActivies");
var today = document.getElementById("today");

todayButton.addEventListener("click", todayContent);

function todayContent() {
  for (let i = 0; i < leftActivies.length; i++) {
    leftActivies[i].style.display = "none";
  }
  today.style.display = "block";
}
