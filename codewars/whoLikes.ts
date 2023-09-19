export const likes = (a: string[]): string => {
  if (a.length == 0) {
    return "no one likes this";
  } else if (a.length == 1) {
    return a.join().concat(` likes this`);
  } else if (a.length <= 3) {
    return a
      .join(", ")
      .replace(/,$/, "")
      .replace(/,([^,]*)$/, " and" + "$1")
      .concat(" like this");
  } else {
    let a1: string[] = a.slice(0, 2);
    return a1
      .join(", ")
      .replace(/,$/, "")
      .concat(` and ${a.length - 2} others like this`);
  }
};

// best solution is to put it in a switch case function

console.log(likes(["Jacob", "Alex", "Jodi", "Gabi", "Peter"]));
