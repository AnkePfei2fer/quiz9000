const questionList = [
  "Are you a robot? 🤖",
  "Are you a camel? 🐫",
  "Are you a frog? 🐸",
  "Are you a cat? 😸",
  "Are you a koala? 🐨",
  "Are you a hacker? 💻",
];

const answerList = [false, false, false, false, false, true];

let questionIndex = 0;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[questionIndex];
let correctAnswer = answerList[questionIndex];

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
  questionIndex += 1;
  myQuestion.textContent = questionList[questionIndex];
  correctAnswer = answerList[questionIndex];
  document.body.removeChild(document.querySelector(".correct"));
  quizEnd();
}

function quizEnd() {
  if (questionIndex === 6) {
    document.body.removeChild(document.querySelector(".yes"));
    document.body.removeChild(document.querySelector(".no"));
    // document.body.removeChild(document.querySelectorAll("button"));
  } else {
  }
}
