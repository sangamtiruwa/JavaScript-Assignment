document.addEventListener('DOMContentLoaded', function () {
    var targetElement = document.getElementById('target');

    const names = ['John', 'Paul', 'Jones'];

    var htmlContent = '';

    for (var i = 0; i < names.length; i++) {
        htmlContent += '<li>' + names[i] + '</li>';
    }

    targetElement.innerHTML = htmlContent;
});
