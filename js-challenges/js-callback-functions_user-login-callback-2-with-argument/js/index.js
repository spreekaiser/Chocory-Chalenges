console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function welcomeShowMessage(userName) {
  console.log(`Welcome ${userName} You are logged in now.`);
}

handleUserLogin(welcomeShowMessage);
handleUserLogin((userName) => {
  console.log(`Welcome ${userName} You are logged in now.`);
});
