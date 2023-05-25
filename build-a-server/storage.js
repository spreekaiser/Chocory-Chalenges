// we use the node internal module fs - filesystem
import fs from "fs";

// reading from a file
const fileData = fs.readFileSync("./data.json");
// we need to change the data to a js object
const jsonData = JSON.parse(fileData);
console.log(jsonData);

// modify that array
jsonData[0].name = "John Lennon";
jsonData[1].name = "Yoko Doe";

// write to a file - we need to turn the js object to a string
console.log(jsonData);
fs.writeFileSync("./data.json", JSON.stringify(jsonData));
