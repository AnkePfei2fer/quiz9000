// Set questions as array
const questionList = [
  "Are you a robot? 🤖",
  "Are you a camel? 🐫",
  "Are you a frog? 🐸",
  "Are you a cat? 😸",
  "Are you a koala? 🐨",
  "Are you a hacker? 💻",
];

// Set answers as array
const answerList = [false, false, false, false, false, true];

let questionIndex = 0;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[questionIndex];
let correctAnswer = answerList[questionIndex];
updateProgress();

const divQuiz = document.querySelector(".quiz");

// If answer is correct, show message and jump to next question
function showIfAnswerIsCorrect() {
  const newP = document.createElement("p");
  newP.textContent = "You are perfectly right! 😎";
  newP.className = "correct";
  divQuiz.appendChild(newP);
  setTimeout(setNewQuestion, 1000);
}

// If answer is wrong, show message and disable button
function showIfAnswerIsWrong() {
  const newP = document.createElement("p");
  newP.textContent = "Oh no, please try again! 🧐";
  newP.className = "wrong";
  divQuiz.appendChild(newP);
  disableButtons();
}

// If correct answer is true
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showIfAnswerIsCorrect();
  } else {
    showIfAnswerIsWrong();
  }
};

// If correct answer is false
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showIfAnswerIsCorrect();
  } else {
    showIfAnswerIsWrong();
  }
};

// disabeling the buttons
function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

// when jumping to next question, remove answer message and update progress
function setNewQuestion() {
  questionIndex += 1;
  myQuestion.textContent = questionList[questionIndex];
  correctAnswer = answerList[questionIndex];
  divQuiz.removeChild(document.querySelector(".correct"));
  updateProgress();
  quizEnd();
}

// display current and total question number
function updateProgress() {
  const progressElement = document.querySelector(".progress");
  const questionLength = questionList.length;
  let questionNumber = questionIndex + 1;
  progressElement.textContent =
    "Question " + questionNumber + "/" + questionLength;
}

// after completing last question, remove buttons and show message
function quizEnd() {
  if (questionIndex === questionList.length) {
    divQuiz.removeChild(document.querySelector(".buttons"));
    divQuiz.removeChild(document.querySelector(".progress"));
    divQuiz.removeChild(document.querySelector(".heading"));
    const Congrats = document.createElement("h1");
    Congrats.textContent = "✨Congratulations! You rocked it!✨";
    Congrats.className = "congrats";
    divQuiz.appendChild(Congrats);
  }
}
