import React from "react";
import "./styles.css";

export default function App() {
  return <Sum a={1} b={2} />;
}

function Sum(props) {
  return <p>{props.a + props.b}</p>;
}
