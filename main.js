// HTML Variables
let clickBall = document.getElementById("clickBall");
let answerE1 = document.getElementById("answer");

// Event Listner
document.getElementById("clickBall").addEventListener("click", clickAnswer);

// Declare Function
function clickAnswer() {
  // Generate randNum
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.5) {
    answerE1.innerHTML = "Yes";
  } else {
    answerE1.innerHTML = "No";
  }
}
