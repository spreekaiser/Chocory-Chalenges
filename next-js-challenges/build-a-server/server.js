import express from "express";
import fs from "fs";

import cors from "cors";

const persons = ["yair", "klaus", "gimena"];

const app = express();

// this is to solve the CORS problem of the browser
app.use(cors());

// routes
app.get("/", (request, response) => {
  //   console.log(app);
  response.json(persons);
});

// externes file greifen und in JS-Object Konvertieren
const admins = JSON.parse(fs.readFileSync("./data.json"));
let adminText = ""; // leere Variable erstellen, um den Text reinzupacken

for (let admin of admins) {
  adminText += admin.id + ". " + admin.name + " | ";
}

console.log(adminText);

app.get("/admins", (req, res) => {
  res.json({ adminText });
});

app.get("/about", (req, res) => {
  res.json({ text: "hello from about" });
});

/*
GET /products -> all products
GET /products/:id -> one product
POST /products -> add a new product to the database
*/

// https://github.com/<username>
app.get("/:user", (req, res) => {
  // access the route parameter
  // req.params.user
  res.json(req.params);
});

app.listen(8000, () => console.log("Server listening on port 8000"));
