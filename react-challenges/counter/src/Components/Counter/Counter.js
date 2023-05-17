import React, { useState } from "react"; // useState muss importiert werden
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleButton() {
    console.log("counter: ", counter);
    setCounter(counter + 1);
  }

  return (
    <button onClick={handleButton}>
      You have clicked this button {counter} times
    </button>
  );
}
