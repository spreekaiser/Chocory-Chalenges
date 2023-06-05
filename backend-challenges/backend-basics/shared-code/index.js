import { server } from "./server.js";
const PORT = 8000;

server.listen(PORT, () => {
  console.log(`I'm listening at http://localhost:${PORT}`);
});
