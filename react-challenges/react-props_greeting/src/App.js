import "./styles.css";

export default function App() {
  return <Greeting name="Peter" />;
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
