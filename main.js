const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot?";

// document.body.onload = answerYes;
// function answerYes() {
//   const newP = document.createElement("p");
//   const newAnswer = document.createTextNode("You are perfectly right!");
//   newP.appendChild(newAnswer);
//   const buttons = document.getElementById("anker");
//   document.body.insertBefore(newP, buttons);
// }

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    const newP = document.createElement("p");
    newP.textContent = "You are perfectly right!";
    newP.className = "correct";
    document.body.append(newP);
  } else {
    const newP = document.createElement("p");
    newP.textContent = "Think about it one more time!";
    newP.className = "wrong";
    document.body.append(newP);
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    const newP = document.createElement("p");
    newP.textContent = "You are perfectly right!";
    newP.className = "correct";
    document.body.append(newP);
  } else {
    const newP = document.createElement("p");
    newP.textContent = "Think about it one more time!";
    newP.className = "wrong";
    document.body.append(newP);
  }
};

// const noButton = document.querySelector(".no");
// noButton.onclick = function () {
//   if (correctAnswer === false) {
//     alert("You are perfectly right!");
//   } else {
//     alert("Think about it one more time!");
//   }
// };
