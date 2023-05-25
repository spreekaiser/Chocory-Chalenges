## Minimal server

Installation
```bash
$ npm install express cors
```

Running the server
```bash
$ node server.js
```

When you are too tired of stopping / restarting the server
```bash
$ npm install -g nodemon
$ nodemon server.js
```

Communicating with that server from a React app
```
fetch('http://localhost:8000)
```