document.addEventListener('DOMContentLoaded', function () {
    var formElement = document.querySelector('form');

    formElement.addEventListener('submit', function (event) {
        event.preventDefault();

        var firstName = document.querySelector('input[name="firstname"]').value;
        var lastName = document.querySelector('input[name="lastname"]').value;

        var targetParagraph = document.getElementById('target');
        targetParagraph.textContent = 'Your name is ' + firstName + ' ' + lastName;
    });
});
