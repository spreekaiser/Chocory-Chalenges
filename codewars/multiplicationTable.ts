export function multiplicationTable(size: number): number[][] {
  let table: number[][] = [];
  for (let a = 0; a < size; a++) {
    table[a] = new Array(size);

    for (let b: number = 0; b < size; b++) {
      table[a][b] = (a + 1) * (b + 1);
    }
  }

  console.log("endTable: ", table);
  return table;
}

multiplicationTable(2);
