console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const TITLE = "Post title";
const TEXT = "Post text";
let likesNumber = 0;
const POST_WRITER = "Name";
let isReported = false;

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

console.log(TITLE);
console.log(TEXT);
console.log(POST_WRITER);
console.log("Likes: " + likesNumber);
likesNumber = likesNumber + 1;
console.log("Likes: " + likesNumber);
console.log(isReported);

// --v-- write your code here --v--

// --^-- write your code here --^-
