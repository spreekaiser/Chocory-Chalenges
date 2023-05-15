import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>We are greeting everyone</p>
    </div>
  );
}
