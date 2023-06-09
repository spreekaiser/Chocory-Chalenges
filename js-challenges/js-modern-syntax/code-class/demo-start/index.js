console.clear();

/* ----------------------
        OBJECT
 ------------------------- */

/* -------- Destructuring Assignment - Objects --------- */

const tree = {
  name: "oak",
  age: 1200,
  scientificName: "quercus",
  // height: 500,
};

const addTree = {
  nameTree: "Oh My god!",
  age: 900,
  height: 500,
};
// Old way of getting our values
// const name = tree.name;
// const age = tree.age;
// const scientificName = tree.scientificName;

//  Destructuring an object. Destructure the object into its keys as variables
// const { name: treeName, age, scientificName} = tree;

// Destructuring non exiting key property. -> Heigh is undefine
// const { name: treeName, age, scientificName, height } = tree;

// Assign a default value, if the key property doesn't exist.
// const { name: treeName, age, scientificName, height = 100 } = tree;

// We can use destructuring in Functions. Not only we can assign default values on object but in the argument of a function.
function logTree(
  { name: treeName, age, scientificName, height = 200 },
  message = "I am a Default VALUE"
) {
  console.log(
    "Name: ",
    treeName,
    "\nAge: ",
    age,
    "\nScientific Name: ",
    scientificName,
    "\nHeight: ",
    height,
    "\nMessage: ",
    message,
    "\n-------"
  );
}

console.log("colloquialName, age, height", colloquialName, age, height);
// We pass our object as the param to the function
// logTree(tree);

// We pass our object as the param to the function, with message
// logTree(tree. "Hi, it's me");

// Destructuring an Object. We save one key value to newName and all the other key (the rest keys) in information
const { name: newName = "Maria", ...information } = tree;
// console.log("NEW name: ", newName, "\nInformation: ", information);

// We want to create a new object using the values of an existing object and adding some more keys.

// If the key name exist in tree is going to be overwritten.
// Order Matter!
// const newTree = { ...tree, name: "I did it" };

// So, for our value not get over written, first me put the key that we want and the we destructure the existing object.
const newTree = { name: "I did it", ...tree };

// console.log("\n-------", "\nNEW Tree object: ", newTree);

// Log our original Object
// console.log("\n-------", "\nTree object: ", tree);

const superObject = { ...tree, ...addTree };
console.log("Super Object: ", superObject);

/* ----------------------
          ARRAYS
------------------------ */

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale"];

// const [animal1, animal2, animal3, , animal5] = animals;

// console.log(
//   "Animal 1 ",
//   animal1,
//   "\nAnimal 2: ",
//   animal2,
//   "\nAnimal 3: ",
//   animal3,
//   "\nAnimal 5: ",
//   animal5
// );

// If we want to skip some values we just use ,
// const [, animal2, animal3, , animal5] = animals;

// console.log(
//   "Animal 2: ",
//   animal2,
//   "\nAnimal 3: ",
//   animal3,
//   "\nAnimal 5: ",
//   animal5
// );

//If we want some values as variables and the others as an array
// const [animal1, animal2, ...otherAnimals] = animals;

// console.log(
//   "Animal 1: ",
//   animal1,
//   "\nAnimal 2: ",
//   animal2,
//   "\nOther Animals: ",
//   otherAnimals
// );

// We want to create a new array with the old one and adding the new variable in this array
const newAnimal = "Turtle";

// const newAnimals = [...animals, newAnimal];
// console.log("New Animals: ", newAnimals);

// Concatenating 2 Arrays
const newAnimalsArray = ["Turtle", "Hedgehog", "Dog"];

const superArray = [...animals, ...newAnimalsArray];
// console.log("Super Array: ", superArray);

// console.log("Array: ", animals);
