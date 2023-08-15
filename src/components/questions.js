const questions = [
  {
    question: "What is the capital of Ukraine?",
    answers: [
      { text: "Kyiv", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "who is the author of the picture of dorian gray?",
    answers: [
      { text: "Oscar Wilde", correct: true },
      { text: "Agatha Christie", correct: false },
      { text: "Jenny Han", correct: false },
    ],
  },
  {
    question: "how many countries are there in the uk?",
    answers: [
      { text: "4", correct: true },
      { text: "6", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "How many days are in a leap year?",
    answers: [
      { text: "366", correct: true },
      { text: "365", correct: false },
      { text: "364", correct: false },
    ],
  },
];
const questionElem = document.getElementById("question");
const answerElem = document.getElementById("answer");

let score = 0;
let i = 0;
function Quize() {
  score = 0;
  i = 0;
  showCurrentQuestion();
}
function showCurrentQuestion() {
  let currentQuestion = questions[i];
  questionElem.innerHTML = currentQuestion.question;

  // currentQuestion.answers.forEach((answer) => {
  //   const btn = document.createElement("button");
  //   btn.innerHTML = answer.text;
  //   btn.classList.add("btn");
  //   answerElem.appendChild(btn);
  // });
}
Quize();
export default showCurrentQuestion;
