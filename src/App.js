import "./App.css";
import { Button, Stack } from "@mui/material";
import { BorderLinearProgress } from "./components/progressBar";
import result from "./components/result";
import { useState } from "react";

function App() {
  const questions = [
    {
      question: "What is the capital of Ukraine?",
      answers: [
        { btn: "Kyiv", correct: true },
        { btn: "London", correct: false },
        { btn: "Rome", correct: false },
      ],
    },
    {
      question: "How many continents are there?",
      answers: [
        { btn: "7", correct: true },
        { btn: "9", correct: false },
        { btn: "5", correct: false },
      ],
    },
    {
      question: "who is the author of the picture of dorian gray?",
      answers: [
        { btn: "Oscar Wilde", correct: true },
        { btn: "Agatha Christie", correct: false },
        { btn: "Jenny Han", correct: false },
      ],
    },
    {
      question: "how many countries are there in the uk?",
      answers: [
        { btn: "4", correct: true },
        { btn: "6", correct: false },
        { btn: "2", correct: false },
      ],
    },
    {
      question: "How many days are in a leap year?",
      answers: [
        { btn: "366", correct: true },
        { btn: "365", correct: false },
        { btn: "364", correct: false },
      ],
    },
    {
      question: "Congrats!you finished the test",
    },
  ];
  let [score, setScore] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [progress, setProgress] = useState(0);

  const onClick = (e) => {
    let text = e.target.id;
    setProgress(progress + 20);
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion > 4) {
    }
    console.log(score);
    if (questions[currentQuestion].answers[text].correct === true) {
      console.log("correct");
      setScore((score = score + 1));
    } else {
      console.log("wrong!");
    }
  };
  const startAgain = () => {
    setCurrentQuestion((currentQuestion = 0));
    setScore((score = 0));
    setProgress((progress = 0));
  };
  return (
    <div className="body">
      <header className="App-header">
        <form className="form">
          {/* <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          ></Stack> */}
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <BorderLinearProgress variant="determinate" value={progress} />
            <h4 id="question">{questions[currentQuestion].question}</h4>

            <button onClick={onClick} className="answer" id="0" type="button">
              {questions[currentQuestion].answers[0].btn}
            </button>
            <button onClick={onClick} className="answer" id="1" type="button">
              {questions[currentQuestion].answers[1].btn}
            </button>
            <button onClick={onClick} className="answer" id="2" type="button">
              {questions[currentQuestion].answers[2].btn}
            </button>
          </Stack>
        </form>
        <button onClick={startAgain} className="start" type="button">
          Start again
        </button>
      </header>
    </div>
  );
}

export default App;
