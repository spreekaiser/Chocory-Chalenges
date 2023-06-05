import { createServer } from "node:http";

const port = 8000;

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
