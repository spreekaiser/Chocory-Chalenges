console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
*/
let bookTitle;
let author;
let rating;
let numberOfSales;

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// function onlineStore(bookTitle, author, rating, numberOfSales) {
//   console.log("Title: " + bookTitle);
//   console.log("Author: " + author);
//   console.log("Rating: " + rating);
//   console.log("Sales: " + numberOfSales);

//   ratingX = Math.random() * 3;
//   ratingX = Math.round(ratingX * 10) / 10;
//   console.log(ratingX);

//   numberOfSalesX = Math.trunc(Math.random() * 175);
//   console.log(numberOfSalesX);

//   rating += ratingX;
//   numberOfSales += numberOfSalesX;

//   console.log("Title: " + bookTitle);
//   console.log("Author: " + author);
//   console.log("Rating: " + Math.round(rating * 10) / 10);
//   console.log("Sales: " + numberOfSales);
// }

// onlineStore("Die Räuber", "Jonny Keine Ahnung", 7, 2350);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function onlineStore(bookTitle, author, rating, numberOfSales) {
  printOut(bookTitle, author, rating, numberOfSales);

  rating += ratingRandom();
  numberOfSales += salesIncreecing();
  console.log(rating, numberOfSales);
  printOut(bookTitle, author, rating, numberOfSales);

  rating += ratingRandom();
  numberOfSales += salesIncreecing();
  console.log(rating, numberOfSales);
  printOut(bookTitle, author, rating, numberOfSales);
}

function printOut(bookTitle, author, rating, numberOfSales) {
  console.log("Title: " + bookTitle);
  console.log("Author: " + author);
  console.log("Rating: " + Math.round(rating * 10) / 10);
  console.log("Sales: " + numberOfSales);
}

function ratingRandom() {
  ratingX = Math.random() * 3;
  return Math.round(ratingX * 10) / 10;
}

function salesIncreecing() {
  return Math.trunc(Math.random() * 175);
}

onlineStore("Die Räuber", "Jonny Keine Ahnung", 7, 2350);

// --^-- write your code here --^--
