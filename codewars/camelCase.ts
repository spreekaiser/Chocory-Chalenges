export function camelCase(str: string): string {
  let result: string = "";

  str.split(" ").forEach((word): void => {
    let letterArray: String[] = word.split("");
    if (letterArray[0]) {
      letterArray[0] = letterArray[0].toUpperCase();
      result = result + letterArray.join("");
    }
  });

  console.log(result);
  return result;
}

camelCase("f un c tion is c a lled with the following arguments");
