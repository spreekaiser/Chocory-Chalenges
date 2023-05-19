import React from "react";
import Counter from "./components/Counter";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        handleAdd={() => setPeople(people + 1)}
        handleSub={() => setPeople(people - 1)}
        people={people}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
