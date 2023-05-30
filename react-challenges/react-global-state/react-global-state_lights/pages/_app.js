import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "../components/Layout";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [isOn, setIsOn] = useState(false);

  // console.log("app: ", lights);

  function handleToggle(id) {
    console.log("App ID:", id);
    console.log("App isOn:", isOn);

    setIsOn((isOn) => !isOn);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        isOn={isOn}
        handleToggle={handleToggle}
      />
    </Layout>
  );
}
