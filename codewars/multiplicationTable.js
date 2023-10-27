"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicationTable = void 0;
function multiplicationTable(size) {
    var table = [];
    for (var a = 0; a < size; a++) {
        table[a] = new Array(size);
        for (var b = 0; b < size; b++) {
            table[a][b] = (a + 1) * (b + 1);
        }
    }
    console.log("endTable: ", table);
    return table;
}
exports.multiplicationTable = multiplicationTable;
multiplicationTable(2);
