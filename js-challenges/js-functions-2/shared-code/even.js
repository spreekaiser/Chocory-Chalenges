function isEven(number) {
    const answer = number % 2 === 0;
    return answer;

    // Why is this not executed?
    if (number > 10000000) {
        console.log('Wow! What a huge number');
    }
}

const userNumber = 10000001;
const userNumberIsEven = isEven(userNumber);
if (userNumberIsEven) {
    console.log('You chose an even number!');
} else {
    console.log('You chose an odd number!');
}
