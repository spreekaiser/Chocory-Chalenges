export function persistence(num: number): number {
  let result: number = 0;
  let numArray: string[] = num.toString().split("");
  console.log("1. numArray.length: ", numArray.length);

  while (numArray.length > 1) {
    result += 1;
    let newNum: number = 1;
    for (let i: number = 0; i < numArray.length; i++) {
      newNum *= parseInt(numArray[i]);
      console.log(`numArray[${i}]`, numArray[i]);
    }
    console.log("newNum: ", newNum);

    numArray = newNum.toString().split("");
    console.log("2. numArray.content: ", numArray);
    console.log("2. numArray.length: ", numArray.length);

    console.log("Repeatings: : ", result);
  }

  console.log("EndResult is: : ", result);
  return result;
}

persistence(39);
