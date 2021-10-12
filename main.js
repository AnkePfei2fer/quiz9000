const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot?";

document.body.onload = addElement;
function addElement() {
  const newP = document.createElement("p");
  const newAnswer = document.createTextNode("You are perfectly right!");
  newP.appendChild(newAnswer);
  const buttons = document.getElementById("anker");
  document.body.insertBefore(newP, buttons);
}

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    alert("You are perfectly right!");
  } else {
    alert("Think about it one more time!");
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    alert("You are perfectly right!");
  } else {
    alert("Think about it one more time!");
  }
};
