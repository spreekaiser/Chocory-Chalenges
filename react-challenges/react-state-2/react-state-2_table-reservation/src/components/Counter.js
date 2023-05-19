export default function Counter({ people, handleAdd, handleSub }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={handleAdd}
        >
          +
        </button>
        <p>{people}</p>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={handleSub}
        >
          -
        </button>
      </div>
    </>
  );
}
