import "./Card.css";

export default function Card({ name, color }) {
  return (
    <div className="card">
      <p className={`card--${color}`}>{name}</p>
    </div>
  );
}
