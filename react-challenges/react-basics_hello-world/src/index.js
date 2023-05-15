import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Greeting from "./Greeting";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <Greeting /> */}
  </StrictMode>
);
