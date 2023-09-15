function duplicateCount(text: string): number {
  let duplicate: number = 0;
  let searchString: string = text.toLowerCase();
  const searchArray: string[] = searchString.split("");
  console.log("searchString before for-loop: " + searchString);
  for (let i: number = 0; i < searchArray.length; i++) {
    console.log("loop rounds: " + i);
    console.log("searchString: " + searchString);
    if (searchString.split(searchArray[i]).length > 2) {
      let char: string = searchArray[i];
      console.log("char: " + char);
      searchString = searchString.replace(new RegExp(char, "g"), "");
      console.log(searchArray[i] + " ist mehr als 1 mal drin");
      duplicate += 1;
      // searchArray.splice(searchArray.indexOf(searchArray[i]), 1);
      console.log("searchString in for-loop: " + searchString);
      console.log("searchArray in for-loop: " + searchArray);
    }
  }

  console.log("searchString after for-loop: " + searchString);
  console.log("duplicate ist: " + duplicate);
  return duplicate;
}

duplicateCount("Indivisibilities");
