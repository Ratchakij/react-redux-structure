import {
  Badge,
  Button,
  ButtonGroup,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export default function HomePage() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);

  const countAll = () => {
    setCountA((count) => count + 1);
    setCountB((count) => count + 1);
    setCountC((count) => count + 1);
    console.log(countA + " " + countB + " " + countC);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex justify-center  items-center space-x-4 mb-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-32 h-32" alt="Vite logo" />{" "}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-32 h-32" alt="React logo" />{" "}
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center mb-4">Vite + React</h1>{" "}
      <div className="card flex flex-col items-center p-4  rounded-lg">
        <Stack direction="row" className="w-full flex justify-evenly gap-24">
          <Typography variant="h4" gutterBottom>
            {countA}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {countB}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {countC}
          </Typography>
        </Stack>
        <ButtonGroup
          className="flex gap-10"
          variant="text"
          aria-label="Basic button group"
        >
          <Button
            variant="contained"
            onClick={() => setCountA((count) => count + 1)}
          >
            count A
          </Button>
          <Button
            variant="outlined"
            onClick={() => setCountB((count) => count + 1)}
          >
            count B {countB}
          </Button>
          <Button
            variant="text"
            onClick={() => setCountC((count) => count + 1)}
          >
            count C {countC}
          </Button>
        </ButtonGroup>
        <Button
          className="w-full my-4 border-4 border-double"
          onClick={countAll}
        >
          Count All
        </Button>
        <p className="text-center">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
