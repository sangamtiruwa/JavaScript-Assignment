document.addEventListener('DOMContentLoaded', function () {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operationSelect = document.getElementById('operation');
    var calculateButton = document.getElementById('start');
    var resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);

        var selectedOperation = operationSelect.value;

        var result;
        switch (selectedOperation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Cannot divide by zero';
                }
                break;
            default:
                result = 'Invalid operation';
                break;
        }

        resultParagraph.textContent = 'Result: ' + result;
    });
});
