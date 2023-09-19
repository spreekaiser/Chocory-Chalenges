export function createPhoneNumber(numbers: number[]): string {
  let part1: string = numbers.slice(0, 3).join();
  let part2: string = numbers.slice(3, 6).join();
  let part3: string = numbers.slice(6, 10).join();
  const phoneNumber = `(${part1}) ` + part2 + `-` + part3;
  return phoneNumber.replace(new RegExp(",", "g"), "");
}

// the same function in one line:
// return  ['(', numbers.slice(0,3),") ", numbers.slice(3,6),'-',numbers.slice(6,10)].join("").replace(/,/g, '');

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
