'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
    const userInput = prompt(`Enter number ${i + 1}: `);
    const number = parseFloat(userInput);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert('Invalid input. Please enter a valid number.');
        i--;
    }
}

console.log('Numbers in Reverse Order:');
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
