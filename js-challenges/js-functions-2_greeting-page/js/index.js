console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

const date = new Date().getHours();

function getGreeting(date) {
  if (date >= 6 && date <= 12) {
    return "Good Morning";
  } else if (date >= 13 && date <= 18) {
    console.log("Good Afternoon");
    return "Good Afternoon";
  } else if (date >= 19 && date <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }

  console.log(date);
}

function getDayColor(day) {
  if (day == 1) {
    return "darkgray";
  }
  if (day >= 2 && day <= 5) {
    // console.log("lightblue");
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting(new Date().getHours());
document.body.style.backgroundColor = getDayColor(new Date().getDay());
