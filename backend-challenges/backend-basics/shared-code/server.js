import { createServer } from "node:http";

export const server = createServer((request, response) => {
  // console.log("I got a request!");

  if (request.url === "/secret") {
    response.statusCode = 200;
    response.end("Not telling you!");
  } else if (request.url === "/sudo-secret") {
    response.statusCode = 200;
    response.end("098;lkj@lkj");
  } else if (request.url === "/answer") {
    response.statusCode = 200;
    response.end("42");
  } else if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello World");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Bye World");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});

// export { server };
