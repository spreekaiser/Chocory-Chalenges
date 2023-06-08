function canGetDriversLicense(age) {
    if (age < 1) {
        return null;
    } else if (age < 18) {
        return false;
    } else {
        return true;
    }
}

console.log('age -93? ' + canGetDriversLicense(-93));
console.log('age 93? ' + canGetDriversLicense(93));
