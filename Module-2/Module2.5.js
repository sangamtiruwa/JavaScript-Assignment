'use strict';
const enteredNumbers = new Set();

while (true) {
    const userInput = prompt('Enter a number (enter "stop" to finish)');

    if (userInput.toLowerCase() === 'stop') {
        break;
    }

    const number = parseFloat(userInput);

    if (!isNaN(number)) {
        if (enteredNumbers.has(number)) {
            alert('Number already entered. Stopping program.');
            break;
        } else {
            enteredNumbers.add(number);
        }
    } else {
        alert('Invalid input. Please enter a valid number.');
    }
}

const sortedNumbers = Array.from(enteredNumbers).sort((a, b) => a - b);
console.log('Entered Numbers (in ascending order):', sortedNumbers);
