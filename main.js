const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot?";

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
