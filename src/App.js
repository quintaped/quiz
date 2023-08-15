import "./App.css";
import { Button, Stack } from "@mui/material";
import CustomizedProgressBars from "./components/progressBar";

function App() {
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
            <CustomizedProgressBars />
            <h4 id="question">Quize</h4>

            <button className="answer" id="answer" variant="outlined">
              Var1
            </button>
            <button className="answer" id="answer" variant="outlined">
              Var2
            </button>
            <button className="answer" id="answer" variant="outlined">
              Var3
            </button>
          </Stack>
        </form>
      </header>
    </div>
  );
}

export default App;
