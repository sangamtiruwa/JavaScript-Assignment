const numbers = [];

let userInput;
do {
    userInput = prompt('Enter a number (enter 0 to stop)');
    const number = parseFloat(userInput);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert('Invalid input. Please enter a valid number.');
    }
} while (userInput !== '0');

numbers.sort((a, b) => b - a);

console.log('Sorted Numbers (from largest to smallest):', numbers);
