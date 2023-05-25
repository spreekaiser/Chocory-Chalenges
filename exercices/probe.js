let str = "The_Stealth-Warrior";
function toCamelCase(str) {
  let result = "";
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str[i]);
    if (str[i] == "-" || str[i] == "_") {
      result = result + str[i + 1].toUpperCase();
    } else {
    }
  }
}
