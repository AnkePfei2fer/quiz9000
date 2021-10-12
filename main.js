const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot? 🤖";

function showIfAnswerIsCorrect() {
  const newP = document.createElement("p");
  newP.textContent = "You are perfectly right! 😎";
  newP.className = "correct";
  document.body.append(newP);
  setTimeout(setNewQuestion, 1000);
}

function showIfAnswerIsWrong() {
  const newP = document.createElement("p");
  newP.textContent = "Oh no, please try again! 🧐";
  newP.className = "wrong";
  document.body.append(newP);
  disableButtons();
}

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showIfAnswerIsCorrect();
  } else {
    showIfAnswerIsWrong();
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showIfAnswerIsCorrect();
  } else {
    showIfAnswerIsWrong();
  }
};

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  myQuestion.textContent = "Are you a camel? 🐫";
  document.body.removeChild(document.querySelector(".correct"));
  const correctAnswer = false;
}
