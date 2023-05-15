import React from "react";
import "./styles.css";
import Pet from "./components/Pet";

export default function App() {
  return (
    <div>
      <Pet animal="A kanguru" icon="🦘" />
      <Pet animal="A orangutan" icon="🦧" cuteness="very cute" />
      <Pet animal="A flamingo" icon="🦩" color="pink" />
    </div>
  );
}
