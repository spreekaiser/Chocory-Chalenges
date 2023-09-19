export function alphanumeric(string: string): boolean {
  const regex: RegExp = new RegExp("^[a-zA-Z0-9]+$", "g");
  console.log(string.match(regex));
  let check: RegExpMatchArray | null = string.match(regex);
  return check !== null ? true : false;
}

console.log(alphanumeric(""));
