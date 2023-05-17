import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 3,
      name: "🍓 strawberry",
      color: "red",
    },
    {
      id: 4,
      name: "🍊 mandarin",
      color: "orange",
    },
    {
      id: 5,
      name: "🫐 blueberrys",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}

      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
