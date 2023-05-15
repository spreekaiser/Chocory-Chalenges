import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>Get update</Button>
      <Button>Join here</Button>
      <Button>let a message</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
