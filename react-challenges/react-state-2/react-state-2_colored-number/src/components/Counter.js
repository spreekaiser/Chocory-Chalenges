import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleAdd() {
    setValue(value + 1);
  }

  function handleSub() {
    setValue(value - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleSub}
        >
          -
        </button>
      </div>
    </div>
  );
}
