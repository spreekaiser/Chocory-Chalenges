"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumeric = void 0;
function alphanumeric(string) {
    //   const regex: RegExp = new RegExp("\\w+|^\\s+$", "g");
    var regex = new RegExp("^[a-zA-Z0-9]+$", "g");
    console.log(string.match(regex));
    var check = string.match(regex);
    //   const stringArray: string[] = string.split("");
    //   let index: number = stringArray.indexOf(" ");
    //   let check: boolean;
    //     index > 0 ? (check = true) : (check = false);
    return check !== null ? true : false;
}
exports.alphanumeric = alphanumeric;
console.log(alphanumeric(""));
// /[a-z|A-Z0-9]+
