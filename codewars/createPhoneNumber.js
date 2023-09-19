"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumber = void 0;
function createPhoneNumber(numbers) {
    var part1 = numbers.slice(0, 3).join();
    var part2 = numbers.slice(3, 6).join();
    var part3 = numbers.slice(6, 10).join();
    var phoneNumber = "(".concat(part1, ") ") + part2 + "-" + part3;
    return phoneNumber.replace(new RegExp(",", "g"), "");
}
exports.createPhoneNumber = createPhoneNumber;
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
