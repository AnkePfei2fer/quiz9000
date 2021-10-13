// Set questions aand answers as objects in an array
const questions = [
  { question: "Are you a robot? 🤖", answer: false },
  { question: "Are you a camel? 🐫", answer: false },
  { question: "Are you a frog? 🐸", answer: false },
  { question: "Are you a cat? 😸", answer: false },
  { question: "Are you a koala? 🐨", answer: false },
  { question: "Are you a hacker? 💻", answer: true },
];

let questionIndex = 0;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex].question;
let correctAnswer = questions[questionIndex].answer;
updateProgress();

const divQuiz = document.querySelector(".quiz");

// create and return html element
function createMyElement(tagName, properties) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  element.className = className;
  return element;
}

// If answer is correct, show message and jump to next question
function showIfAnswerIsCorrect() {
  const newP = createMyElement(
    "p",
    (textContent = "You are perfectly right! 😎"),
    (className = "correct")
  );
  divQuiz.appendChild(newP);
  setTimeout(setNewQuestion, 1000);
}

// If answer is wrong, show message and disable button
function showIfAnswerIsWrong() {
  const newP = createMyElement(
    "p",
    (textContent = "Oh no, please try again! 🧐"),
    (className = "wrong")
  );
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
  divQuiz.removeChild(document.querySelector(".correct"));
  if (questionIndex < questions.length) {
    myQuestion.textContent = questions[questionIndex].question;
    correctAnswer = questions[questionIndex].answer;
    updateProgress();
  } else {
    quizEnd();
  }
}

// display current and total question number
function updateProgress() {
  const progressElement = document.querySelector(".progress");
  const questionLength = questions.length;
  let questionNumber = questionIndex + 1;
  progressElement.textContent =
    "Question " + questionNumber + " of " + questionLength;
}

// after completing last question, remove buttons and show message
function quizEnd() {
  divQuiz.removeChild(document.querySelector(".questionaire"));
  const Congrats = document.createElement("h1");
  Congrats.textContent = "✨Congratulations! You rocked it!✨";
  divQuiz.appendChild(Congrats);
}
