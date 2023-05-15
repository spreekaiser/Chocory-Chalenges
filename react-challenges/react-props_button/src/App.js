import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Button
        color={"yellow"}
        disabled={false}
        text={"Click me!"}
        onClick={handleClick}
      />
    </h1>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function handleClick() {
  alert("Click, Click");
}
