export function numPrimorial(n: number): number {
  let numPrimorial: number = 1;
  let primNumber: number[] = [];

  function isPrime(prim: number): boolean {
    if (prim <= 1) return false;
    for (var i = 2; i <= prim - 1; i++) if (prim % i == 0) return false;
    return true;
  }

  for (let i: number = 1; i++; ) {
    if (isPrime(i)) {
      primNumber.push(i);
      console.log("primNumber: " + primNumber);
    }
    if (primNumber.length === n) break;
  }
  primNumber.map((m) => (numPrimorial = numPrimorial * m));
  console.log("numPrimorial: ", numPrimorial);
  return numPrimorial;
}

numPrimorial(6);
